import os
import requests
from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from .models import Project, ContactMessage


def home(request):
    """Main portfolio view"""
    # Fetch featured projects
    projects = Project.objects.filter(is_featured=True)[:6]

    # Fetch GitHub repos
    username = "pa-nuzz"
    token = os.getenv('GITHUB_TOKEN')
    pinned_repos = ['folio-django', 'docu-mind', 'Mamacita', 'userexp', 'security']

    github_repos = []
    headers = {'Authorization': f'token {token}'} if token else {}

    try:
        url = f"https://api.github.com/users/{username}/repos?per_page=100"
        res = requests.get(url, headers=headers, timeout=5)
        if res.status_code == 200:
            all_repos = res.json()
            github_repos = [repo for repo in all_repos if repo['name'] in pinned_repos]
            github_repos.sort(key=lambda x: pinned_repos.index(x['name']))
    except Exception as e:
        print(f"GitHub API Error: {e}")
        github_repos = []

    # Handle contact form submission
    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        message_text = request.POST.get('message', '').strip()

        if name and email and message_text:
            # Save to database
            ContactMessage.objects.create(
                name=name,
                email=email,
                message=message_text
            )

            # Send email notification (optional)
            try:
                send_mail(
                    subject=f'Portfolio Contact: {name}',
                    message=f'From: {name} ({email})\n\nMessage:\n{message_text}',
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.CONTACT_EMAIL],
                    fail_silently=True,
                )
            except Exception as e:
                print(f"Email Error: {e}")

            messages.success(request, 'Message sent successfully! I\'ll get back to you soon.')
            return redirect('home')
        else:
            messages.error(request, 'Please fill in all fields.')

    context = {
        'projects': projects,
        'github_repos': github_repos,
        'github_username': username,
    }

    return render(request, 'myportfolio/base.html', context)