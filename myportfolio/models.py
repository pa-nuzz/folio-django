from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    stars = models.IntegerField(default=0)
    url = models.URLField()
    image = models.ImageField(upload_to='projects/', blank=True)

    def __str__(self):
        return self.name
