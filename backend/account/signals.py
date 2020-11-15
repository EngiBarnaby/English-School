# from django.db.models.signals import post_save
# from django.contrib.auth.models import User
# from django.contrib.auth.models import Group
#
# from .models import CustomUser
#
#
# def custom_user_profile(sender, instance, created, **kwargs):
#     if created:
#         # group = Group.objects.get(name='Pupil')
#         # instance.groups.add(group)
#         CustomUser.objects.create(
#             user=instance
#         )
#         print('Profile created!')
#
#
# post_save.connect(custom_user_profile, sender=User)
