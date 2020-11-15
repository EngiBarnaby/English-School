from django.urls import path

from .views import get_tasks, get_categories, \
    set_user_task, refresh_account_task_data, \
    get_user_data

urlpatterns = [
    path('tasks/', get_tasks, name="tasks"),
    path('categories/', get_categories, name='categories'),
    path("set-user-task/", set_user_task, name="set_user_task"),
    path("get-user-data/", get_user_data, name="get_user_data"),
    path("refresh-user-data/", refresh_account_task_data, name="refresh_account_task_data"),
]