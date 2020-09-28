"""
define users related models
"""
"""
## 2020.09.27 Jhonny Cloche Ma
## refrenced by
## https://milooy.wordpress.com/2016/02/18/extend-django-user-model/
from django.db import models
from django.contrib.auth.models import(
BaseUserManager, AbstractBaseUser, PermissionMixin
)


class PocketmarketUserManager(BaseUserManager):
    def create_user(self, email, nickname, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(
            email = PocketmarketUserManager.normalize_email(email),
            nickname = nickname,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(selfself, email, nickname, password):
        u = self.create_user(email=email,
                             nickname=nickname,
                             password=password)
        u.is_admin = True
        u.save(using=self._db)
        return u

class PocketmarketUser(AbstractBaseUser, PermissionMixin):
    email = models.EmailField(
        verbose_name='email',
        max_length=255,
        unique=True,
    )
    nickname = models.CharField(
        u'닉네임',
        max_length = 10,
        blank=False,
        unique=True,
        default=''
    )
    avatar = models.ImageField(
        null=True,
        blank=True,
        upload_to='/image/avatar',
    )

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    objects = PocketmarketUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nickname']

    def get_full_name(self):
        # The user is identified by their email address
        return self.email

    def get_short_name(self):
        # The user is identified by their email address
        return self.email

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer : yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the 'app_label?'"
        # simplest possible answer : yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer : All admins are staff
        return self.is_admin

"""

"""
define festivals related models
"""
from django.db import models


class User(models.Model):

    """ User Model Definition """

    userName = models.CharField(max_length=50)
