"""
Django settings for config project.

Generated by 'django-admin startproject' using Django 3.1.1.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""
from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("SECRET_KEY")

ALLOWED_HOSTS = [
    'http://localhost:3000',
    'http://localhost:8000',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:8000',
    'http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:3000',
    'http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000',
    'http://13.124.90.138:3000',
    'http://13.124.90.138:8000',
]

# Application definition

DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

PROJECT_APPS = [
    'festivals.apps.FestivalsConfig',
    'users.apps.UsersConfig',
    'stores.apps.StoresConfig',
    'brands.apps.BrandsConfig',
    'reviews.apps.ReviewsConfig',
    'items.apps.ItemsConfig',
    'cprts.apps.CprtsConfig',
    'keymaps.apps.KeymapsConfig',
    'trades.apps.TradesConfig',
    'interfaces',
    'kdses'
]

THIRD_PARTY_APPS = [
    'corsheaders',
    'rest_framework',
    'storages',
    'fcm_django',
]

INSTALLED_APPS = DJANGO_APPS + PROJECT_APPS + THIRD_PARTY_APPS

FCM_API_KEY = os.environ.get("FCM_API_KEY")
FCM_DJANGO_SETTINGS = {
        "FCM_SERVER_KEY": FCM_API_KEY
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, "build"), # react build한 파일
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'

# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'ko-kr'

TIME_ZONE = 'Asia/Seoul'

USE_I18N = True

USE_L10N = True

USE_TZ = True

AUTH_USER_MODEL = "users.User"

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

##############################
# 2020-12-19 Jhonny Cloche Ma#
# S3 Setting##################
##############################


# AWS Setting
AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
AWS_REGION_NAME = 'ap-northeast-2'
AWS_QUERYSTRING_AUTH = False
AWS_DEFAULT_ACL = 'public-read'

# S3 setting
AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
AWS_REGION_NAME = 'ap-northeast-2'
AWS_QUERYSTRING_AUTH = False
AWS_DEFAULT_ACL = None

AWS_STORAGE_BUCKET_NAME = 'pocketmarket-dev'
AWS_S3_SECURE_URLS = False       # use http instead of https
AWS_S3_HOST = 's3.ap-northeast-2.amazonaws.com'
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
    'ACL': 'public-read'
}

# STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "build/"),
]

DEFAULT_FILE_STORAGE = 'config.storage_backends.MediaStorage'
STATICFILES_STORAGE = 'config.storage_backends.StaticStorage'

STATIC_URL = 'https://%s.%s/static/' % (AWS_STORAGE_BUCKET_NAME, AWS_S3_HOST)
STATIC_ROOT = 'https://%s.%s/static/' % (AWS_STORAGE_BUCKET_NAME, AWS_S3_HOST)

MEDIA_URL = 'https://%s.%s/media/' % (AWS_STORAGE_BUCKET_NAME, AWS_S3_HOST)

# cors 관련 설정
CORS_ALLOW_ALL_ORIGINS = False

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:8000',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:8000',
    'http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:3000',
    'http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000',
    'http://13.124.90.138:3000',
    'http://13.124.90.138:8000',
    'http://localhost:8000',
    'http://localhost:8000',
]

CSRF_TRUSTED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:8000',
]

CORS_ALLOW_HEADERS = [
    'accept',
    'content-type',
    'x-csrftoken',
]

CORS_ALLOW_CREDENTIALS = True

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ]
}

# Database and DEBUG
# SECURITY WARNING: don't run with debug turned on in production!

STATE = os.environ.get("STATE")

if STATE == "local:start":
    DEBUG = True

    DATABASES = {
        'default' : {
            'ENGINE' : 'django.db.backends.mysql',
            'NAME' : 'pocketMarket_dev',
            'USER' : 'admin',
            'PASSWORD' : os.environ.get("DB_ADMIN_PASSWORD"),
            'PORT' : '3306',
            'HOST' : 'pocketmarket-mysql.cdufdbmrynds.ap-northeast-2.rds.amazonaws.com',
            'OPTIONS' : {
                'init_command' : "SET sql_mode='STRICT_TRANS_TABLES'",
                # 'charset': 'utf8mb4',
            },
        }
    }

elif STATE == "local:dev":
    DEBUG = True

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'pocketMarket_dev',
            'USER': 'admin',
            'PASSWORD': os.environ.get("DB_ADMIN_PASSWORD"),
            'PORT': '3306',
            'HOST': 'pocketmarket-mysql.cdufdbmrynds.ap-northeast-2.rds.amazonaws.com',
            'OPTIONS': {
                'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
                # 'charset': 'utf8mb4',
            },
        }
    }

    DEFAULT_FILE_STORAGE = 'config.storage_backends.MediaStorage'
    STATICFILES_STORAGE = 'config.storage_backends.StaticStorage'

    STATIC_URL = 'https://%s.%s/static/' % (AWS_STORAGE_BUCKET_NAME, AWS_S3_HOST)

    MEDIA_URL = 'https://%s.%s/media/' % (AWS_STORAGE_BUCKET_NAME, AWS_S3_HOST)




elif STATE == "dev":
    DEBUG = True

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'HOST': os.environ.get("RDS_HOST"), # endpoint
            'NAME': os.environ.get("RDS_NAME"), # amazon RDS DB identifier
            'USER': os.environ.get("RDS_USER"),
            'PASSWORD': os.environ.get("RDS_PASSOWRD"),
            'PORT': '5432',
        }
    }

    # DEFAULT_FILE_STORAGE = 'config.storage_backends.MediaStorage'
    # STATICFILES_STORAGE = 'config.storage_backends.StaticStorage'

    # STATIC_URL = 'https://%s.%s/static/' % (AWS_STORAGE_BUCKET_NAME, AWS_S3_HOST)

    # MEDIA_URL = 'https://%s.%s/media/' % (AWS_STORAGE_BUCKET_NAME, AWS_S3_HOST)

elif STATE == "production":
    DEBUG = False

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'HOST': os.environ.get("RDS_HOST"), # endpoint
            'NAME': os.environ.get("RDS_NAME"), # amazon RDS DB identifier
            'USER': os.environ.get("RDS_USER"),
            'PASSWORD': os.environ.get("RDS_PASSOWRD"),
            'PORT': '5432',
        }
    }

    DEFAULT_FILE_STORAGE = 'config.storage_backends.MediaStorage'
    STATICFILES_STORAGE = 'config.storage_backends.StaticStorage'

    STATIC_URL = 'https://%s.%s/static/' % (AWS_STORAGE_BUCKET_NAME, AWS_S3_HOST)

    MEDIA_URL = 'https://%s.%s/media/' % (AWS_STORAGE_BUCKET_NAME, AWS_S3_HOST)

