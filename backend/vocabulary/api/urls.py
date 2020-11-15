from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import WordViewSet, get_random_words,\
    get_count_words, get_all_words, add_word, get_user_words, \
    set_user_words, get_user_stats, get_irregular_verbs

router = DefaultRouter()

router.register("words", WordViewSet)

urlpatterns = [
    path("random", get_random_words, name="random"),
    path("words-count", get_count_words, name="words-count"),
    path("all-words", get_all_words, name="get_all_words"),
    path('add-word/', add_word, name='add_word'),
    path('user-words/', get_user_words, name="get_user_words"),
    path("set-user-word/", set_user_words, name="set_user_word"),
    path("get-user-stats/", get_user_stats, name="get_user_stats"),
    path("irregular-verbs/", get_irregular_verbs, name="get_irregular_verbs"),
]

urlpatterns += router.urls
