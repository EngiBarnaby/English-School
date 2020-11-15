from django.db import models

from account.models import CustomUser

class Category(models.Model):
    title = models.CharField(max_length=100)


    def __str__(self):
        return self.title

class Task(models.Model):
    user = models.ManyToManyField(CustomUser, related_name="tasks", blank=True)
    title = models.TextField(null=False, blank=False)
    content = models.TextField()
    created = models.DateField(auto_now_add=True)
    category = models.ForeignKey(Category, null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.title

class Option(models.Model):
    text = models.CharField(max_length=100)
    position = models.PositiveSmallIntegerField(null=True, blank=True)
    answer = models.BooleanField(default=False)
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='options')

    def __str__(self):
        return '{} {} {}'.format(self.position, self.text, self.answer)