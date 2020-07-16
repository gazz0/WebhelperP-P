import coreapi
from rest_framework.schemas import AutoSchema

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


class TagsListViewSchema(AutoSchema):
    def get_manual_fields(self, path, method):
        extra_fileds = []
        if method.lower() in ['post', 'put']:
            extra_fileds = [
                coreapi.Field(name='user_items', required=True, type='integer'),
                coreapi.Field(name='culture'),
                coreapi.Field(name='setting'), 
                coreapi.Field(name='atmosphere'),                   
            ]
        return super().get_manual_fields(path, method) + extra_fileds

class SessionItemsListViewSchema(AutoSchema):
    def get_manual_fields(self, path, method):
        extra_fileds = []
        if method.lower() in ['post', 'put']:
            extra_fileds = [
                coreapi.Field(name='session', required=True, type='integer'),
                coreapi.Field(name='user_items', required=True, type='integer'),
                coreapi.Field(name='comment'), 
                coreapi.Field(name='hidden ', type='boolean'),              
            ]
        return super().get_manual_fields(path, method) + extra_fileds

class RatingStarListViewSchema(AutoSchema):
    def get_manual_fields(self, path, method):
        extra_fileds = []
        if method.lower() in ['post', 'put']:
            extra_fileds = [
                coreapi.Field(name='user', required=True, type='integer'),
                coreapi.Field(name='user_items', required=True, type='integer'),
                coreapi.Field(name='value', required=True,  type='integer'),         
            ]
        return super().get_manual_fields(path, method) + extra_fileds


class MusicListViewSchema(AutoSchema):
    def get_manual_fields(self, path, method):
        extra_fileds = []
        if method.lower() in ['post', 'put']:
            extra_fileds = [
                coreapi.Field(name='title'),
                coreapi.Field(name='author'),
                coreapi.Field(name='description'), 
                coreapi.Field(name='url', type='string'), 
                coreapi.Field(name='user', required=True,  type='integer'),  
            ]
        return super().get_manual_fields(path, method) + extra_fileds

class SessionListViewSchema(AutoSchema):
    def get_manual_fields(self, path, method):
        extra_fileds = []
        if method.lower() in ['post', 'put']:
            extra_fileds = [
                coreapi.Field(name='name'),
                coreapi.Field(name='description'),
                coreapi.Field(name='comment'), 
                coreapi.Field(name='image', type='string'), 
                coreapi.Field(name='user', required=True,  type='integer'), 
                
            ]
        return super().get_manual_fields(path, method) + extra_fileds

class UserItemsListViewSchema(AutoSchema):
    def get_manual_fields(self, path, method):
        extra_fileds = []
        if method.lower() in ['post', 'put']:
            extra_fileds = [
                coreapi.Field(name='name'),
                coreapi.Field(name='object_type'),
                coreapi.Field(name='rating'), 
                coreapi.Field(name='image'), 
                coreapi.Field(name='user', required=True,  type='integer'), 
            ]
        return super().get_manual_fields(path, method) + extra_fileds