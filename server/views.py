from server.models import User, UserItems, Session, Music, RatingStar, SessionItems, Items_Tag
from server.serializers import UserSerializer, UserItemsSerializer, UserDetailSerializer, SessionsSerializer, SessionDetailSerializer, UserItemsDetailSerializer, MusicDetailSerializer, MusicsSerializer, RatingStarDetailSerializer, RatingStarsSerializer, SessionItemsSerializer, SessionItemsDetailSerializer, TagsSerializer, TagDetailSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import (AllowAny, IsAuthenticated)
from django.shortcuts import get_object_or_404
from rest_framework import status

import coreapi
from rest_framework.schemas import AutoSchema
from django.core.exceptions import ObjectDoesNotExist

class UserListViewSchema(AutoSchema):
    def get_manual_fields(self, path, method):
        extra_fileds = []
        if method.lower() in ['post', 'put']:
            extra_fileds = [
                coreapi.Field(name='email'),
                coreapi.Field(name='is_admin'),
                coreapi.Field(name='first_name'), 
                coreapi.Field(name='last_name'),  
                coreapi.Field(name='created_at'),
                coreapi.Field(name='image'),
                coreapi.Field(name='password'),
            ]
        return super().get_manual_fields(path, method) + extra_fileds

# Create your views here.
class UserListView(APIView):
    #permission_classes = (IsAuthenticated,)
    schema = UserListViewSchema()
    def get(self, request):
        users = User.objects.filter()
        serializer_class = UserSerializer(users, many=True)
        return Response(serializer_class.data)

    def post(self, request):
        user = UserSerializer(data=request.data)
        if user.is_valid():
            user.save()
        return Response({"success": "User created successfully"})
        



class UserDetailView(APIView):
    #permission_classes = (IsAuthenticated,)

    def get(self, request, pk):
        user = User.objects.get(id=pk)
        serializer_class = UserDetailSerializer(user)
        return Response(serializer_class.data)


    def delete(self, request, pk):
        user = User.objects.filter(id=pk)
        user.delete()
        return Response({"success": "User Item deleted successfully"})

    def put(self,request, pk):
        user = User.objects.get(id=pk)
        user = UserDetailSerializer(user, data=request.data)
        if user.is_valid():
            user.save()
        return Response(user.data)


class UserItemsListView(APIView):

    def get(self, request):
        user_item = UserItems.objects.filter()
        serializer_class = UserItemsSerializer(user_item, many=True)
        return Response(serializer_class.data)

    def post(self, request):
        user_item =  UserItemsSerializer(data=request.data)
        if user_item.is_valid():
            user_item.save()
        return Response({"success": "User Item created successfully", "data": user_item.data})



class UserItemsDetailView(APIView):

    def get(self, request, pk):
        user_item = UserItems.objects.get(id=pk)
        serializer_class = UserItemsDetailSerializer(user_item)
        return Response(serializer_class.data)

    def put(self, request, pk):
        user_item = UserItems.objects.get(id=pk)
        user_item = UserItemsDetailSerializer(user_item, data=request.data)
        if user_item.is_valid():
            user_item.save()
        return Response(user_item.data)

    def delete(self, request, pk):
        user_item = UserItems.objects.filter(id=pk)
        user_item.delete()
        return Response({"success": "User Item deleted successfully"})
  



class SessionListView(APIView):
    def get(self, request):
        session_list = Session.objects.filter()
        serializer_class = SessionsSerializer(session_list, many=True)
        return Response(serializer_class.data)

    def post(self, request):
        session = SessionsSerializer(data=request.data)
        if session.is_valid():
            session.save()
        return Response({"success": "Session created successfully", "data": session.data})


class SessionDetailView(APIView):
    def get(self, request, pk):
        session = Session.objects.get(id=pk)
        serializer_class  = SessionDetailSerializer(session)
        return Response(serializer_class.data)

    def put(self, request, pk):
        session = Session.objects.get(id=pk)
        session = SessionDetailSerializer(session, data=request.data)
        if session.is_valid():
            session.save()
        return Response(session.data)

    def delete(self, pk):
        session = Session.objects.filter(id=pk)
        session.delete()
        return Response({"success": "Session deleted successfully"})

class MusicListView(APIView):

    def get(self, request):
        music_list = Music.objects.filter()
        serializer_class = MusicsSerializer(music_list, many=True)
        return Response(serializer_class.data)

    def post(self, request):
        music = MusicsSerializer(data=request.data)
        if music.is_valid():
            music.save()
        return Response({"success": "Music created successfully", "data": music.data})

class MusicDetailView(APIView):

    def get(self, request, pk):
        music = Music.objects.get(id=pk)
        serializer_class  = MusicDetailSerializer(music)
        return Response(serializer_class.data)

    
    def put(self, request, pk):
        music = Music.objects.get(id=pk)
        music = MusicDetailSerializer(music, data=request.data)
        if music.is_valid():
            music.save()
        return Response(music.data)


    def delete(self, request, pk):
        music = Music.objects.filter(id=pk)
        music.delete()
        return Response({"success": "Music deleted successfully"})



class RatingStarListView(APIView):

    def get(self, request):
        rating_star_list = RatingStar.objects.filter()
        serializer_class = RatingStarsSerializer(rating_star_list , many=True)
        return Response(serializer_class.data)

    def post(self, request):
        rating_star = RatingStarsSerializer(data=request.data)
        if rating_star.is_valid():
            rating_star.save()
        return Response({"success": "Rating created successfully", "data": rating_star.data})

class RatingStarDetailView(APIView):

    def get(self, request, pk):
        rating_star = RatingStar.objects.get(id=pk)
        serializer_class = RatingStarDetailSerializer(rating_star)
        return Response(serializer_class.data)

    def put(self, request, pk):
        rating_star = RatingStar.objects.get(id=pk)
        rating_star = RatingStarDetailSerializer(rating_star , data=request.data)
        if rating_star.is_valid():
            rating_star.save()
        return Response(rating_star.data)


    def delete(self, request, pk):
        rating_star = RatingStar.objects.filter(id=pk)
        rating_star.delete()
        return Response({"success": "Rating deleted successfully"})


class SessionItemsListView(APIView):

    def get(self, request):
        session_items_list = SessionItems.objects.filter()
        serializer_class = SessionItemsSerializer(session_items_list , many=True)
        return Response(serializer_class.data)

    def post(self, request):
        session_item = SessionItemsSerializer(data=request.data)
        if session_item.is_valid():
            session_item.save()
        return Response({"success": "Session Item created successfully", "data": session_item.data})

class SessionItemsDetailView(APIView):

    def get(self, request, pk):
        session_item = SessionItems.objects.get(id=pk)
        serializer_class  = SessionItemsDetailSerializer(session_item)
        return Response(serializer_class.data)

    def put(self, request, pk):
        session_item = SessionItems.objects.get(id=pk)
        session_item = SessionItemsDetailSerializer(session_item  , data=request.data)
        if session_item.is_valid():
            session_item.save()
        return Response(session_item.data)


    def delete(self, request, pk):
        session_item  = SessionItems.objects.filter(id=pk)
        session_item.delete()
        return Response({"success": "Rating deleted successfully"})
    

class TagsListView(APIView):

    def get(self, request):
        tags = Items_Tag.objects.filter()
        serializer_class = TagsSerializer(tags , many=True)
        return Response(serializer_class.data)

    def post(self, request):
        tag = TagsSerializer(data=request.data)
        if tag.is_valid():
            tag.save()
        return Response({"success": "Tag created successfully", "data": tag.data})

class TagsDetailView(APIView):

    def get(self, request, pk):
        tag = Items_Tag.objects.get(id=pk)
        serializer_class = TagDetailSerializer(tag)
        return Response(serializer_class.data)

    def put(self, request, pk):
        tag = Items_Tag.objects.get(id=pk)
        tag = TagDetailSerializer(tag, data=request.data)
        if tag.is_valid():
            tag.save()
        return Response(tag.data)

    def delete(self, request, pk):
        tag  = Items_Tag.objects.filter(id=pk)
        tag.delete()
        return Response({"success": "Tag deleted successfully"})