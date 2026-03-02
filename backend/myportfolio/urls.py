from django.urls import path
from . import api_views

urlpatterns = [
    path('chat/', api_views.chat_api, name='api_chat'),
    path('analyze/', api_views.analyze_api, name='api_analyze'),
    path('spotify/', api_views.spotify_api, name='api_spotify'),
    path('contact/', api_views.contact_api, name='api_contact'),
    path('github/', api_views.github_repos_api, name='api_github_repos'),
]