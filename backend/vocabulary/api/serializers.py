import random

from rest_framework import serializers

from ..models import Word, UserWord, IrregularVerbs
from account.models import CustomUser

class IrregularVerbSerializer(serializers.ModelSerializer):
    class Meta:
        model = IrregularVerbs
        fields = '__all__'

class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = '__all__'

class WordTrainingSerializer(serializers.ModelSerializer):
    words = serializers.SerializerMethodField()

    class Meta:
        model = Word
        fields = '__all__'

    def get_words(self, obj, nums=3):
        random_words = Word.objects.values_list("id", flat=True)
        random_words_id = random.sample(list(random_words), nums)
        qs = Word.objects.filter(id__in=random_words_id)
        qs = [{"eng": item.eng, "rus": item.rus, "status": "False"} for item in qs]
        qs.append({"eng": obj.eng, "rus": obj.rus,"status": "True"})
        return qs


class UserWordsSerializer(serializers.ModelSerializer):
    word = WordTrainingSerializer(many=False, read_only=True)

    class Meta:
        model = UserWord
        fields = ["user", 'word', "date_add", 'repeated']