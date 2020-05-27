
from rest_framework import routers, renderers
from django.urls import path
from server import views



urlpatterns = [
                path('users/', views.UserListView.as_view()),
                path('users/<int:pk>/', views.UserDetailView.as_view()),
                path('sessions/', views.SessionListView.as_view()),
                path('sessions/<int:pk>/', views.SessionDetailView.as_view()),
                path('items/', views.UserItemsListView.as_view()),
                path('items/<int:pk>/', views.UserItemsDetailView.as_view()),
                path('session_items/', views.SessionItemsListView.as_view()),
                path('session_items/<int:pk>/', views.SessionItemsDetailView.as_view()),
                path('musics/', views.MusicListView.as_view()),
                path('musics/<int:pk>/', views.MusicDetailView.as_view()),
                path('ratings/', views.RatingStarListView.as_view()),
                path('ratings/<int:pk>/', views.RatingStarDetailView.as_view()),
                path('tags/', views.TagsListView.as_view()),
                path('tags/<int:pk>/', views.TagsDetailView.as_view()),

]