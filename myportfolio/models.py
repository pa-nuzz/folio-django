from django.db import models
from django.utils import timezone


class Project(models.Model):
    """Featured work projects"""

    title = models.CharField(max_length=200)
    description = models.TextField()

    tech_stack = models.CharField(
        max_length=500,
        blank=True,
        null=True,
        help_text="Comma-separated technologies (e.g., Python, Django, PostgreSQL)"
    )

    image = models.ImageField(upload_to='projects/')
    link = models.URLField(blank=True)
    github_link = models.URLField(blank=True)

    order = models.IntegerField(
        default=0,
        help_text="Higher numbers appear first"
    )

    is_featured = models.BooleanField(default=True)
    created_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ['-order', '-created_at']
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def __str__(self):
        return self.title

    def get_tech_list(self):
        """Returns tech stack as a list"""
        if not self.tech_stack:
            return []
        return [
            tech.strip()
            for tech in self.tech_stack.split(',')
            if tech.strip()
        ]


class ContactMessage(models.Model):
    """Contact form submissions"""

    name = models.CharField(max_length=200)
    email = models.EmailField()
    message = models.TextField()

    created_at = models.DateTimeField(default=timezone.now)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Contact Message"
        verbose_name_plural = "Contact Messages"

    def __str__(self):
        return f"{self.name} - {self.email} ({self.created_at.strftime('%Y-%m-%d')})"
