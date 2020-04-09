from rest_framework import serializers
from server.models import User

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