from django.urls import path
from post.views import AllPosts

urlpatterns = [
    path('', AllPosts.as_view()),
]
