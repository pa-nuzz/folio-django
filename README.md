
# folio-django

portfolio built with Django.

## ✨ Features
- **Apple Studio Aesthetic**: Dark theme, SF Pro fonts, and grainy textures.
- **GitHub API**: Live syncing of pinned repositories.
- **Django Admin**: Manage project case studies easily.
- **Modern UI**: Smooth animations and magnetic links.

## 🛠️ Tech Stack
- Python / Django
- GitHub REST API
- HTML5 / CSS3 / Vanilla JS
- FontAwesome 6

## 🚀 Setup Instructions

1. **Clone & Enter**
```bash
git clone https://github.com/pa-nuzz/folio-django.git
cd folio-django
```

2. **Virtual Env**
```bash
python -m venv .venv
source .venv/bin/activate
```

3. **Dependencies**
```bash
pip install django requests python-dotenv
```

4. **Secrets**
Create a `.env` file in the root:
```env
GITHUB_TOKEN=your_token_here
```

5. **Run**
```bash
python manage.py migrate
python manage.py runserver
```

---
Built by [Anuj Paudel](https://github.com/pa-nuzz)

