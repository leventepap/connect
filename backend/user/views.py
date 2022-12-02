from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.response import Response

from user.models import User
from user.serializers import UserSerializer


class AllUsers(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class SingleUser(GenericAPIView):
    queryset = User.objects.all()
    lookup_field = 'id'

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = UserSerializer(instance)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = UserSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        return Response(status=204)
