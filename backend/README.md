# Django Portfolio Backend

A robust Django REST API powering the portfolio website. Handles project management, skills tracking, contact form submissions, and Spotify integration.

## 🚀 Features

- **RESTful API** - Django REST Framework powered endpoints
- **Project Management** - CRUD operations for portfolio projects
- **Skills Tracking** - Categorized skills with proficiency levels
- **Contact Form** - Email sending with validation
- **Spotify Integration** - Fetch top artists and playlists
- **Admin Dashboard** - Django admin for content management
- **CORS Support** - Ready for frontend integration

## 🛠️ Tech Stack

- **Framework:** Django 5.0
- **API:** Django REST Framework
- **Database:** SQLite (dev) / PostgreSQL (prod)
- **Email:** SMTP (Gmail, SendGrid, etc.)
- **Auth:** Session-based + Token optional

## 📦 Installation

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Start development server
python manage.py runserver
```

Server will be available at `http://localhost:8000`

## 🔧 Environment Variables

Create a `.env` file in the `backend/` directory:

```env
# Django Settings
DEBUG=True
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=localhost,127.0.0.1

# Database (Optional - defaults to SQLite)
DB_NAME=portfolio_db
DB_USER=postgres
DB_PASSWORD=your-password
DB_HOST=localhost
DB_PORT=5432

# Email Settings
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
DEFAULT_FROM_EMAIL=your-email@gmail.com

# Spotify API (Optional)
SPOTIFY_CLIENT_ID=your-spotify-client-id
SPOTIFY_CLIENT_SECRET=your-spotify-client-secret
SPOTIFY_REFRESH_TOKEN=your-refresh-token

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
```

## 📡 API Endpoints

### Projects

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects/` | List all projects |
| POST | `/api/projects/` | Create new project |
| GET | `/api/projects/{id}/` | Get project details |
| PUT | `/api/projects/{id}/` | Update project |
| DELETE | `/api/projects/{id}/` | Delete project |

**Project Schema:**
```json
{
  "id": 1,
  "title": "Project Name",
  "description": "Project description",
  "tech_list": ["React", "Django"],
  "link": "https://example.com",
  "github_link": "https://github.com/user/repo",
  "image": "https://image-url.com/image.jpg"
}
```

### Skills

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/skills/` | List all skills |
| POST | `/api/skills/` | Create new skill |

**Skill Schema:**
```json
{
  "id": 1,
  "name": "React",
  "category": "Frontend",
  "proficiency": 90
}
```

### Contact

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact/` | Submit contact form |

**Contact Form Schema:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in working with you!"
}
```

### Spotify (Optional)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/spotify/top-artists/` | Get top artists |

## 🏗️ Project Structure

```
backend/
├── manage.py                 # Django management script
├── requirements.txt          # Python dependencies
├── myportfolio/             # Main Django settings
│   ├── __init__.py
│   ├── settings.py          # Project settings
│   ├── urls.py              # URL configuration
│   ├── wsgi.py              # WSGI entry point
│   └── asgi.py              # ASGI entry point
├── projects/                # Projects app
│   ├── models.py            # Project model
│   ├── views.py             # API views
│   ├── serializers.py       # DRF serializers
│   └── urls.py              # App URLs
├── skills/                  # Skills app
│   ├── models.py            # Skill model
│   ├── views.py             # API views
│   └── serializers.py       # DRF serializers
└── contact/                 # Contact form app
    ├── models.py            # Contact model
    ├── views.py             # API views
    └── email_service.py     # Email handling
```

## 🚢 Deployment

### Deploy to Render

1. Create a `render.yaml` file:
```yaml
services:
  - type: web
    name: portfolio-api
    runtime: python
    buildCommand: "pip install -r requirements.txt && python manage.py migrate"
    startCommand: "gunicorn myportfolio.wsgi:application"
    envVars:
      - key: SECRET_KEY
        generateValue: true
      - key: DEBUG
        value: "False"
      - key: ALLOWED_HOSTS
        value: "your-app.onrender.com"
```

2. Push to GitHub and connect to Render

### Deploy to Heroku

```bash
# Create Heroku app
heroku create your-portfolio-api

# Add PostgreSQL
heroku addons:create heroku-postgresql:mini

# Set environment variables
heroku config:set SECRET_KEY=your-secret-key
heroku config:set DEBUG=False

# Deploy
git push heroku main

# Run migrations
heroku run python manage.py migrate

# Create superuser
heroku run python manage.py createsuperuser
```

### Deploy to VPS (Ubuntu + Nginx + Gunicorn)

1. **Setup server:**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install dependencies
sudo apt install python3-pip python3-venv nginx postgresql -y

# Clone repository
git clone https://github.com/pa-nuzz/folio-django.git
cd folio-django/backend

# Setup virtual environment
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --noinput

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser
```

2. **Configure Gunicorn:**
```bash
# Create systemd service
sudo nano /etc/systemd/system/portfolio.service
```

Add:
```ini
[Unit]
Description=Portfolio Django App
After=network.target

[Service]
User=ubuntu
Group=www-data
WorkingDirectory=/home/ubuntu/folio-django/backend
Environment="PATH=/home/ubuntu/folio-django/backend/venv/bin"
Environment="DJANGO_SETTINGS_MODULE=myportfolio.settings"
ExecStart=/home/ubuntu/folio-django/backend/venv/bin/gunicorn --access-logfile - --workers 3 --bind unix:/home/ubuntu/portfolio.sock myportfolio.wsgi:application

[Install]
WantedBy=multi-user.target
```

3. **Configure Nginx:**
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Add:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location = /favicon.ico { access_log off; log_not_found off; }
    location /static/ {
        root /home/ubuntu/folio-django/backend;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/home/ubuntu/portfolio.sock;
    }
}
```

4. **Enable configuration:**
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl start portfolio
sudo systemctl enable portfolio
```

## 🔒 Security Checklist

- [ ] Change default `SECRET_KEY` in production
- [ ] Set `DEBUG=False` in production
- [ ] Configure `ALLOWED_HOSTS` with your domain
- [ ] Use HTTPS (Let's Encrypt)
- [ ] Set up database backups
- [ ] Configure email backend properly
- [ ] Enable CORS only for trusted origins
- [ ] Use environment variables for sensitive data
- [ ] Set up fail2ban for SSH protection
- [ ] Configure firewall (UFW)

## 🧪 Testing

```bash
# Run tests
python manage.py test

# Run tests with coverage
coverage run --source='.' manage.py test
coverage report
```

## 📝 Admin Usage

Access the admin panel at `/admin/`:

1. Login with superuser credentials
2. Manage projects in "Projects" section
3. Manage skills in "Skills" section
4. View contact submissions in "Contact" section

## 🔧 Troubleshooting

| Issue | Solution |
|-------|----------|
| CORS errors | Update `CORS_ALLOWED_ORIGINS` in settings |
| Static files 404 | Run `collectstatic` and check Nginx config |
| Database locked (SQLite) | Switch to PostgreSQL for production |
| Email not sending | Check SMTP credentials and app passwords |
| 500 errors | Check logs: `heroku logs --tail` or `journalctl -u portfolio` |

## 📄 License

MIT License

## 🤝 Credits

Built by [Anuj Don](https://github.com/pa-nuzz)

---

**Frontend Repository:** [folio-frontend](https://github.com/pa-nuzz/folio-django/tree/main/folio-frontend)
