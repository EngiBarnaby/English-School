from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import Group
from django.db.models.signals import post_save


class CustomUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100, null=True)
    first_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    count_task_mistakes = models.IntegerField(default=0)
    user_picture = models.ImageField(default="profile2.png", null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def get_task_data(self, *args, **kwargs):
        return {'userMistakes': {"count": self.count_task_mistakes, "description": "Количество ошибок"},
                'taskDone': {'count': len(list(self.tasks.values())), "description": "Количество решёных заданий"}}

    def get_user_stats_task_and_words(self, *args, **kwargs):
        return {'wordsCount': {"count": len(self.word_set.values()), "description": "Слова"},
                'taskDone': {'count': len(list(self.tasks.values())), "description": "Задания"}}

    def __str__(self):
        return self.user.username


def custom_user_profile(sender, instance, created, **kwargs):
    if created:
        group = Group.objects.get(name='Pupil')
        instance.groups.add(group)
        CustomUser.objects.create(
            user=instance,
            name=instance.username,
            email=instance.email
        )
        print('Profile created!')


post_save.connect(custom_user_profile, sender=User)


