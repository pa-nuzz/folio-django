# 🚀 DEPLOYMENT CHECKLIST

## Pre-Deployment

### 1. Environment Setup
- [ ] Create `.env` file from `.env.example`
- [ ] Set `DEBUG=False` in production
- [ ] Add your domain to `ALLOWED_HOSTS`
- [ ] Generate secure `SECRET_KEY`
- [ ] Add GitHub token (optional but recommended)

### 2. Static Files
- [ ] Run `python manage.py collectstatic`
- [ ] Verify static files are in `staticfiles/` directory
- [ ] Test static file serving

### 3. Database
- [ ] Run `python manage.py makemigrations`
- [ ] Run `python manage.py migrate`
- [ ] Create superuser: `python manage.py createsuperuser`

### 4. Content Setup
- [ ] Upload profile image to `myportfolio/static/myportfolio/images/`
- [ ] Add projects through admin panel
- [ ] Update GitHub username in `views.py`
- [ ] Verify GitHub API integration works

### 5. Code Review
- [ ] Update personal information in templates
- [ ] Check all links work correctly
- [ ] Verify email addresses are correct
- [ ] Test dark/light mode toggle

## Testing Before Deploy

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] All sections scroll smoothly
- [ ] Navigation links work
- [ ] Theme toggle works
- [ ] Projects display properly
- [ ] GitHub repos load
- [ ] Contact links work
- [ ] Admin panel accessible

### Responsive Tests
- [ ] Mobile view (< 480px)
- [ ] Tablet view (768px)
- [ ] Desktop view (> 1024px)
- [ ] Test in Chrome, Firefox, Safari

### Performance Tests
- [ ] Page load time < 3 seconds
- [ ] Images optimized
- [ ] No console errors
- [ ] Smooth animations

## Deployment Steps

### Option A: Heroku
```bash
heroku login
heroku create your-portfolio-name
git push heroku main
heroku run python manage.py migrate
heroku run python manage.py createsuperuser
heroku open
```

### Option B: Railway
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically
4. Run migrations via Railway CLI

### Option C: PythonAnywhere
1. Upload code via git or zip
2. Setup virtual environment
3. Configure WSGI
4. Set static file mappings
5. Reload web app

## Post-Deployment

### Immediate Tasks
- [ ] Verify site loads at production URL
- [ ] Test all functionality in production
- [ ] Check SSL certificate (HTTPS)
- [ ] Test on real devices
- [ ] Monitor error logs

### SEO & Analytics
- [ ] Add Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Add meta tags for social sharing
- [ ] Test with PageSpeed Insights

### Maintenance
- [ ] Set up automated backups
- [ ] Monitor server resources
- [ ] Keep Django updated
- [ ] Regular security updates

## Common Issues & Solutions

### Static Files 404
```python
# In settings.py
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_DIRS = []
```
Then run: `python manage.py collectstatic`

### Admin CSS Not Loading
```python
# Add to settings.py
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
```

### GitHub API Rate Limit
- Add GITHUB_TOKEN to .env
- Implements caching in views.py

### Images Not Showing
```python
# In settings.py
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# In urls.py (development only)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

## Security Checklist

- [ ] `DEBUG = False` in production
- [ ] Strong `SECRET_KEY`
- [ ] HTTPS enabled
- [ ] `ALLOWED_HOSTS` configured
- [ ] Security middleware enabled
- [ ] Regular dependency updates
- [ ] Database backups configured

## Performance Optimization

- [ ] Enable Gzip compression
- [ ] Use CDN for static files (optional)
- [ ] Implement caching
- [ ] Optimize images (compress, WebP format)
- [ ] Minify CSS/JS (production)

---

## Quick Deploy Commands

```bash
# Collect static files
python manage.py collectstatic --noinput

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Test production server locally
python manage.py runserver --settings=portfolio_site.settings
```

## Support

If you encounter issues:
1. Check Django logs
2. Verify environment variables
3. Test locally first
4. Review deployment platform docs

---

**Good luck with your deployment! 🚀**
