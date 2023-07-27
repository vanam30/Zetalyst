from django.contrib import admin
from .models import Freelancer, Business
from .models import JobPost

# Register your models here.

admin.site.register(Freelancer)
admin.site.register(Business)
admin.site.register(JobPost)

