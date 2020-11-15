from rest_framework import serializers

from .models import Grammar, GrammarCategory

class CategoryGrammarSerializer(serializers.ModelSerializer):
    class Meta:
        model = GrammarCategory
        fields = '__all__'

class GrammarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grammar
        fields = "__all__"
