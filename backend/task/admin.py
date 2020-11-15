from django.contrib import admin

from .models import Task, Option, Category

class OptionsInline(admin.TabularInline):
    model = Option

class TaskAdmin(admin.ModelAdmin):
    list_display = ['title', 'category']
    inlines = [OptionsInline]

admin.site.register(Task, TaskAdmin)
admin.site.register(Category)