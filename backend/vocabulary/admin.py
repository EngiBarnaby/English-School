from django.contrib import admin

from .models import Word, UserWord, IrregularVerbs

admin.site.register(Word)
admin.site.register(UserWord)
admin.site.register(IrregularVerbs)
