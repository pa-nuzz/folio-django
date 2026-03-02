from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/images/', null=True, blank=True)
    video_url = models.URLField(max_length=500, null=True, blank=True)
    github_url = models.URLField(max_length=500, null=True, blank=True)
    demo_url = models.URLField(max_length=500, null=True, blank=True)
    tech_list = models.JSONField(default=list, help_text="List of technologies used (e.g. ['React', 'Django'])")
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
