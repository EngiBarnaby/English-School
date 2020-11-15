import calendar

from django.core.serializers import serialize
from django.db.models import Count
from django.db.models.functions import TruncMonth, Cast, ExtractMonth
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework import status

import random
from django.http import JsonResponse

from account.models import CustomUser
from .serializers import WordSerializer, WordTrainingSerializer, UserWordsSerializer, IrregularVerbSerializer
from ..models import Word, UserWord, IrregularVerbs


def get_words(nums=4):
    random_words = Word.objects.values_list("id", flat=True)
    random_words_id = random.sample(list(random_words), nums)
    qs = Word.objects.filter(id__in=random_words_id)
    return qs


# def get_create_training(nums = 5):
#     result = {}
#     for item in get_words():
#         result[item.id] = {'randomItems': {"rus": item.rus, "eng": item.eng, "id": item.id}, 'right': item.id}
#     return result

class WordViewSet(ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = WordSerializer
    queryset = Word.objects.all()

    @action(detail=False)
    def userList(self, request):
        user = CustomUser.objects.get(user=request.user)
        list = Word.objects.filter(user=user)
        serializer = WordSerializer(list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["POST"])
def add_word(request, *args, **kwargs):
    user = CustomUser.objects.get(user=request.user)
    if user:
        user_word = Word.objects.create(rus=request.data['rus'], eng=request.data['eng'])
        user_word.user.add(user)
        try:
            user_word.save()
            serializer = WordSerializer(user_word)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(status=status.HTTP_401_UNAUTHORIZED)


@api_view(["GET"])
def get_all_words(request, *args, **kwargs):
    qs = Word.objects.all()
    serializer = WordSerializer(qs, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def get_count_words(request, *args, **kwargs):
    qs = Word.objects.all()
    # serializer = WordSerializer(qs, many=True)
    wordsCount = len(qs)
    return Response({"wordsCount": wordsCount})


@api_view(["GET"])
def get_random_words(request, *args, **kwargs):
    nums = int(request.GET["nums"])
    qs = get_words(nums)
    serializer = WordTrainingSerializer(qs, many=True)
    return Response(serializer.data)

# def get_random_words(request):
#     result = get_create_training()
#     return JsonResponse(result)

@api_view(["GET"])
def get_user_words(request, *args, **kwargs):
    user = CustomUser.objects.get(user=request.user)
    qs = UserWord.objects.filter(user=user)
    seriliazer = UserWordsSerializer(qs, many=True)
    return Response(seriliazer.data, status=status.HTTP_200_OK)

@api_view(["POST"])
def set_user_words(request, *args, **kwargs):
    user = CustomUser.objects.get(user=request.user)
    try:
        word = UserWord.objects.create(user=user, word=request.data)
        seriliazer = UserWordsSerializer()
        return Response(seriliazer.data, status=status.HTTP_200_OK)
    except:
        return Response("Некоректный данные", status=status.HTTP_400_BAD_REQUEST00_OK)

@api_view(["GET"])
def get_user_stats(request, *args, **kwargs):
    user = CustomUser.objects.get(user=request.user)
    qs = UserWord.objects.annotate(month=ExtractMonth('date_add'))\
                        .values("user__name", "month").annotate(counts=Count('id'))\
                        .order_by("-month").filter(user=user)
    result = [{'user': item["user__name"], "month": calendar.month_name[item["month"]], "counts": item["counts"]} for item in qs]
    return Response(result)

@api_view(["GET"])
def get_irregular_verbs(request, *args, **kwargs):
    verbs = IrregularVerbs.objects.all()
    seriliazer = IrregularVerbSerializer(verbs, many=True)
    return Response(seriliazer.data, status=status.HTTP_200_OK)