from django.db import models
from tinymce.models import HTMLField
from task.models import Category

class GrammarCategory(models.Model):
    title = models.CharField(max_length=150)
    eng_title = models.CharField(max_length=150)

    def __str__(self):
        return self.title

class Grammar(models.Model):
    title = models.CharField(max_length=150)
    content = HTMLField()
    category = models.ForeignKey(GrammarCategory, on_delete=models.SET_NULL, blank=True, null=True)
    task_category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.title
