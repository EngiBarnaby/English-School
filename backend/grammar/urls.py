from django.urls import path

from .views import get_grammars, get_grammars_category,\
        get_grammar_detail, get_all_grammars

urlpatterns = [
    path("all-grammars/", get_all_grammars, name="get_all_grammars"),
    path("get-grammars/", get_grammars, name="get_grammar"),
    path("get-grammars-category/", get_grammars_category, name="get_grammars_category"),
    path("grammar-detail/<int:id>/", get_grammar_detail, name="get_grammar_detail"),
]