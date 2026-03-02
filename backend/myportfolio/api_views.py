import os
import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from django.conf import settings

@api_view(['POST'])
def chat_api(request):
    """Proxy for Neural Chat to Local AI Endpoint"""
    message = request.data.get('message')
    local_ai_url = os.getenv("LOCAL_AI_ENDPOINT", "http://127.0.0.1:11434/v1/chat/completions")
    
    try:
        response = requests.post(local_ai_url, json={
            "model": "mistral",
            "messages": [{"role": "user", "content": message}],
            "stream": False
        }, timeout=30)
        return JsonResponse(response.json())
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

@api_view(['POST'])
def analyze_api(request):
    """Mock/Real Resume and Vision Scan Analysis"""
    analysis_type = request.data.get('type')
    file_name = request.data.get('fileName')
    
    # Mock industrial logic as requested
    if analysis_type == 'resume':
        result = f"[ANALYSIS COMPLETE]\nFILE: {file_name}\nALIGNMENT: 98%\nINSIGHTS: Expertise in Full-Stack detected."
    elif analysis_type == 'ocr':
        result = f"[VISION_SCAN_COMPLETE]\nSOURCE: {file_name}\nPAYLOAD: Decrypted successfully."
    else:
        result = "Unknown analysis type."
        
    return JsonResponse({"result": result})

@api_view(['GET'])
def spotify_api(request):
    """Secure Spotify Data Fetching"""
    client_id = os.getenv("SPOTIFY_CLIENT_ID")
    client_secret = os.getenv("SPOTIFY_CLIENT_SECRET")
    # Implementation for fetching and caching would go here
    return JsonResponse({"status": "Secure uplink active", "client_id_configured": bool(client_id)})

@api_view(['POST'])
def contact_api(request):
    """Unified Contact API for Nodemailer/Django Mail"""
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')
    
    full_message = f"From: {name} <{email}>\n\n{message}"
    
    try:
        send_mail(
            f"New Matrix Transmission from {name}",
            full_message,
            settings.DEFAULT_FROM_EMAIL,
            [settings.CONTACT_EMAIL],
            fail_silently=False,
        )
        return JsonResponse({"message": "Transmission received. Uplink successful."})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

@api_view(['GET'])
def github_repos_api(request):
    """Fetch pinned-like repositories using token"""
    token = os.getenv("GITHUB_TOKEN")
    headers = {"Authorization": f"token {token}"}
    url = "https://api.github.com/user/repos?sort=updated&per_page=6"
    
    try:
        response = requests.get(url, headers=headers)
        return JsonResponse(response.json(), safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
