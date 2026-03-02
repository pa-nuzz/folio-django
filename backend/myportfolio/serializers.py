from rest_framework import serializers
from .models import Project, ContactMessage

class ProjectSerializer(serializers.ModelSerializer):
    tech_list = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'tech_list', 'image', 'link', 'github_link', 'order', 'is_featured', 'created_at']

    def get_tech_list(self, obj):
        return obj.get_tech_list()

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'message', 'created_at']
