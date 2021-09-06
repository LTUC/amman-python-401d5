from rest_framework import generics
from .serializers import PostSerializer
from .models import Posts

# Create your views here.

class PostList(generics.ListCreateAPIView):
    """
    List all posts.
    """
    queryset = Posts.objects.all()
    serializer_class = PostSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    List a single posts.
    """
    queryset = Posts.objects.all()
    serializer_class = PostSerializer