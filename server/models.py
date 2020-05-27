import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import UserManager
# Create your models here.


def set_filename(instance, filename):
    extension = filename.split(".")[-1]
    return "{}.{}".format(uuid.uuid4(), extension)

class User(AbstractBaseUser):
    email = models.EmailField(max_length=255, unique=True)
    is_admin = models.BooleanField(default=False)
    first_name = models.CharField(max_length=100, null=False)
    last_name = models.CharField(max_length=100, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to=set_filename, null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email



class UserItems(models.Model):

    name = models.CharField(max_length=100)
    object_type = models.CharField(max_length=100)
    rating = models.FloatField(max_length=5, null=False, default=0)
    image = models.ImageField(upload_to=set_filename, null=True, blank=True)
    user = models.ForeignKey(User, related_name="items", on_delete=models.CASCADE)
    
    def __str__(self):
        return '%d: %s' % (self.name, self.object_type)


class Session(models.Model):
    user = models.ForeignKey(User, related_name='session', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=2000, null=True)
    comment = models.CharField(max_length=200, null=True)
    image = models.ImageField(upload_to=set_filename, null=True, blank=True)
    


class SessionItems(models.Model):
    session = models.ForeignKey(Session, related_name='session_items', on_delete=models.CASCADE)
    user_items = models.ForeignKey(UserItems, related_name='user_items', on_delete=models.CASCADE)
    hidden = models.BooleanField(default=False)
    comment = models.CharField(max_length=2000, null = True)


class Music(models.Model):
    user = models.ForeignKey(User, related_name='music', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    description = models.CharField(max_length=2000)
    url = models.URLField(null=True)


class Items_Tag(models.Model):
    user_items= models.ForeignKey(UserItems, related_name='tags', on_delete=models.CASCADE)
    culture = models.CharField(max_length=100, null=True)
    setting = models.CharField(max_length=100, null=True)
    atmosphere = models.CharField(max_length=100, null=True)


class RatingStar(models.Model):
    user_items = models.ForeignKey(UserItems, related_name="rating_stars", on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, related_name="rated_stars", on_delete=models.CASCADE, null=True)
    value = models.SmallIntegerField("value", default=0)

    def __str__(self):
        return f'{self.value}'