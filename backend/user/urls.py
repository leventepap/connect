from django.urls import path
from user.views import AllUsers, SingleUser

urlpatterns = [
    path('', AllUsers.as_view()),
    path('<int:id>/', SingleUser.as_view()),
]
