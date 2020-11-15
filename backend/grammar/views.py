from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Grammar, GrammarCategory
from .serializers import GrammarSerializer, CategoryGrammarSerializer

@api_view(["GET"])
def get_grammars_category(request, *args, **kwargs):
    categories = GrammarCategory.objects.all()
    serializer = CategoryGrammarSerializer(categories, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["GET"])
def get_all_grammars(request, *args, **kwargs):
    grammars = Grammar.objects.all()
    serializer = GrammarSerializer(grammars, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["GET"])
def get_grammars(request, *args, **kwargs):
    category = GrammarCategory.objects.get(title=request.GET['category'])
    grammars = Grammar.objects.filter(category=category)
    serializer = GrammarSerializer(grammars, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["GET"])
def get_grammar_detail(request, id, *args, **kwargs):
    grammar = Grammar.objects.get(id=id)
    serializer = GrammarSerializer(grammar)
    return Response(serializer.data, status=status.HTTP_200_OK)
