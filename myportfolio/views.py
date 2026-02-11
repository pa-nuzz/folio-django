from django.shortcuts import render
import requests
from .models import Project

def home(request):
    username = "pa-nuzz"
    url = f"https://api.github.com/users/{username}/repos"

    try:
        response = requests.get(url)
        repos = response.json() if response.status_code == 200 else []
    except:
        repos = []

    projects = Project.objects.all()

    return render(request, 'myportfolio/home.html', {
        'repos': repos,
        'projects': projects
    })

    return render(request, 'myportfolio/home.html', context)


def about(request):
    return render(request, 'myportfolio/about.html')


def skills(request):
    return render(request, 'myportfolio/skills.html')


def contact(request):
    return render(request, 'myportfolio/contacts.html')  # matches your file name
