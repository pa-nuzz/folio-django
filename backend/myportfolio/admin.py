from django.contrib import admin
from .models import Project, ContactMessage


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'order', 'is_featured', 'created_at')
    list_editable = ('order', 'is_featured')
    list_filter = ('is_featured', 'created_at')
    search_fields = ('title', 'description', 'tech_stack')
    ordering = ['-order', '-created_at']

    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'description', 'tech_stack')
        }),
        ('Media & Links', {
            'fields': ('image', 'link', 'github_link')
        }),
        ('Display Settings', {
            'fields': ('order', 'is_featured')
        }),
    )


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at', 'is_read')
    list_filter = ('is_read', 'created_at')
    search_fields = ('name', 'email', 'message')
    readonly_fields = ('name', 'email', 'message', 'created_at')
    list_editable = ('is_read',)
    ordering = ['-created_at']

    def has_add_permission(self, request):
        return False