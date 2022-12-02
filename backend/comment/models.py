from django.db import models
from post.models import Post
from user.models import User


class Comment(models.Model):
    content = models.CharField(max_length=300)
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'ID {self.id} : Comment by {self.user} on {self.post}'