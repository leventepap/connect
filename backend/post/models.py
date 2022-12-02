from django.db import models
from user.models import User


class Post(models.Model):
    content = models.CharField(blank=True, max_length=1000)
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)
    image = models.ImageField(blank=True, null=True)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name='post')
    likes = models.ManyToManyField(to=User, related_name='likes', blank=True)

    def __str__(self):
        return f'ID {self.id} : Post from {self.user}'