import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.contrib.auth.models import BaseUserManager
# Create your models here.


def set_filename(instance, filename):
    extension = filename.split(".")[-1]
    return "{}.{}".format(uuid.uuid4(), extension)

class UserManager(BaseUserManager):
    def create_superuser(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("User must have an email")
        if not password:
            raise ValueError("User must have a password")

        user = self.model(
            email=self.normalize_email(email)
        )
        user.set_password(password)
        user.is_admin = True
        user.is_staff = True
        user.is_active = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    first_name = models.CharField(max_length=100, null=False)
    last_name = models.CharField(max_length=100, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to=set_filename, null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def get_full_name(self):
        # The user is identified by their email address
        return self.email

    def get_short_name(self):
         # The user is identified by their email address
         return self.email

    def __str__(self):
         return self.email

    @staticmethod
    def has_perm(perm, obj=None):
        return True

    @staticmethod
    def has_module_perms(app_label):
         return True

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

    def __str__(self):
        return '%d: %s' % (self.user, self.name)
    


class SessionItems(models.Model):
    session = models.ForeignKey(Session, related_name='session_items', on_delete=models.CASCADE)
    user_items = models.ForeignKey(UserItems, related_name='user_items', on_delete=models.CASCADE)
    hidden = models.BooleanField(default=False)
    comment = models.CharField(max_length=2000, null = True)

    def __str__(self):
        return '%d: %s' % (self.session, self.user_items)

class Music(models.Model):
    user = models.ForeignKey(User, related_name='music', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    description = models.CharField(max_length=2000)
    url = models.URLField(null=True)
    
    def __str__(self):
        return '%d: %s' % (self.user, self.title)


class Items_Tag(models.Model):
    user_items= models.ForeignKey(UserItems, related_name='tags', on_delete=models.CASCADE)
    culture = models.CharField(max_length=100, null=True)
    setting = models.CharField(max_length=100, null=True)
    atmosphere = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.user_items

class RatingStar(models.Model):
    user_items = models.ForeignKey(UserItems, related_name="rating_stars", on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, related_name="rated_stars", on_delete=models.CASCADE, null=True)
    value = models.SmallIntegerField("value", default=0)

    def __str__(self):
        return f'{self.value}'