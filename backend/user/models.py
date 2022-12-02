from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    country = models.CharField(blank=True, max_length=50)
    city = models.CharField(blank=True, max_length=65)
    description = models.CharField(blank=True, max_length=200)
    avatar = models.ImageField(blank=True, null=True)
    cover = models.ImageField(blank=True, null=True)
    phone = models.IntegerField(blank=True, null=True)
    friends = models.ManyToManyField('self', blank=True)
    followers = models.ManyToManyField('self', related_name='user_followers', blank=True, symmetrical=False)
    following = models.ManyToManyField('self', related_name='user_following', blank=True, symmetrical=False)
    url = models.URLField(blank=True)
    interest_tags = models.CharField(blank=True, max_length=500)

    def __str__(self):
        return f'ID {self.id} : {self.first_name} {self.last_name}'