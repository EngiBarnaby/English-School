import random

from django.http import JsonResponse

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from account.models import CustomUser
from .serializers import TaskSerializer, CategorySerializer
from ..models import Task, Category

@api_view(["GET"])
def get_tasks(request, *args, **kwargs):
    user = CustomUser.objects.get(user=request.user)
    try:
        if request.GET['category'] == "Случайная тема":
            category = random.choice(Category.objects.all())
        else:
            category = request.GET['category']
        count = request.GET['count']
        tasks = Task.objects.filter(category__title=category).exclude(user=user)
        tasks = random.sample(list(tasks), int(count))
        serializer = TaskSerializer(tasks, many=True)
    except:
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def get_categories(request, *args, **kwargs):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["POST"])
def set_user_task(request, *args, **kwargs):
    user = CustomUser.objects.get(user=request.user)
    current_task = Task.objects.get(id=request.data['id'])
    current_task.user.add(user)
    return Response(status=status.HTTP_200_OK)

@api_view(["GET"])
def get_user_data(request, *args, **kwargs):
    user = CustomUser.objects.get(user=request.user)
    data = user.get_task_data()
    return JsonResponse(data)

def refresh_account_task_data(request, *args, **kwargs):
    user = CustomUser(user=request.user)
    return Response(status=status.HTTP_200_OK)