from django.db import models

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('frontend', 'Frontend'),
        ('backend', 'Backend'),
        ('ai_ml', 'AI/ML'),
        ('tools', 'Tools & DevOps'),
        ('other', 'Other'),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    level = models.IntegerField(default=50, help_text="Skill level percentage (1-100)")
    icon = models.CharField(max_length=50, null=True, blank=True, help_text="Lucide icon name or SVG path")
    
    def __str__(self):
        return f"{self.name} ({self.get_category_display()})"
