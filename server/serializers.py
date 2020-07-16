from rest_framework import serializers
from server.models import User, Items_Tag, UserItems, RatingStar, Session, SessionItems, Music

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = { 'email': {
                'validators': [],
            }, 'password': {
                'validators': [], 'write_only': True, 'required': False }
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.username = validated_data.get('email')
        user.set_password(password)
        user.save()
        return user



class UserItemsSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserItems
        fields = '__all__'

class MusicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = '__all__'


class SessionsSerializer (serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = '__all__'

class RatingStarsSerializer(serializers.ModelSerializer):
    class Meta:
        model = RatingStar
        fields = '__all__'

class SessionItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SessionItems
        fields = '__all__'

class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items_Tag
        fields = '__all__'

class UserDetailSerializer(serializers.ModelSerializer):
    
    items = UserItemsSerializer(many=True, read_only=True)
    music = MusicsSerializer(many=True,read_only=True)
    rated_stars = RatingStarsSerializer(many=True, read_only=True)
    session = SessionsSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = { 'email': {
                'validators': [],
            }, 'password': {
                'validators': [], 'write_only': True, 'required': False }
        }



class SessionDetailSerializer(serializers.ModelSerializer):
    session_items = SessionItemsSerializer(many=True, read_only=True)
    user = UserSerializer(read_only=True)
    class Meta:
        model = Session
        fields = '__all__'

class UserItemsDetailSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    tags = TagsSerializer(many=True, read_only=True)
    rating_stars = RatingStarsSerializer(many=True, read_only=True)
    class Meta:
        model = UserItems
        fields = '__all__'

class MusicDetailSerializer(serializers.ModelSerializer):
    user = user = UserSerializer(read_only=True)
    class Meta:
        model = Music
        fields = '__all__'


class RatingStarDetailSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    user_items = UserItemsSerializer(read_only=True)
    class Meta:
        model = RatingStar
        fields = '__all__'

class SessionItemsDetailSerializer(serializers.ModelSerializer):
    session = SessionsSerializer(read_only=True)
    class Meta:
        model = SessionItems
        fields = '__all__'

class TagDetailSerializer(serializers.ModelSerializer):
    user_items = UserItemsSerializer(read_only=True)
    class Meta:
        model = Items_Tag
        fields = '__all__'
