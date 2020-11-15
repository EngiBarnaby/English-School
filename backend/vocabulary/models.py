from django.db import models
from account.models import CustomUser

class Word(models.Model):
    user = models.ManyToManyField(CustomUser, blank=True)
    rus = models.CharField(max_length=100)
    eng = models.CharField(max_length=100)
    created = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ["-created"]

    def __str__(self):
        return self.rus + " - " + self.eng

class UserWord(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="words")
    word = models.ForeignKey(Word, on_delete=models.CASCADE, related_name="words")
    repeated = models.IntegerField(default=0)
    date_add = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.word.eng + " " + self.user.name
    
class IrregularVerbs(models.Model):
    infinitive = models.CharField(max_length=75)
    past_simple = models.CharField(max_length=75)
    past_participle = models.CharField(max_length=75)
    translation = models.CharField(max_length=75)

    def __str__(self):
        return self.infinitive + " " + self.translation



