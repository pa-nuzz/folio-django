import os
import requests
from django.shortcuts import render
from .models import Project


def home(request):
    # 1. Fetch Admin Projects
    admin_projects = Project.objects.all().order_by('-order')

    # 2. Fetch GitHub Projects (Official REST API)
    username = "pa-nuzz"

    # Use os.getenv to look for the token in the environment
    token = os.getenv('GITHUB_TOKEN')

    # Your specific pinned projects
    PINNED_NAMES = ['folio-django', 'docu-mind', 'Mamacita', 'userexp', 'security']

    github_repos = []
    # Only add headers if token exists
    headers = {'Authorization': f'token {token}'} if token else {}

    try:
        url = f"https://api.github.com/users/{username}/repos?per_page=100"
        res = requests.get(url, headers=headers, timeout=5)
        if res.status_code == 200:
            all_repos = res.json()
            github_repos = [repo for repo in all_repos if repo['name'] in PINNED_NAMES]
            github_repos.sort(key=lambda x: PINNED_NAMES.index(x['name']))
    except:
        github_repos = []

    context = {
        'admin_projects': admin_projects,
        'github_repos': github_repos,
        'github_username': username,
    }
    return render(request, 'myportfolio/base.html', context)