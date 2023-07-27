from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Message(models.Model):
    sender = models.ForeignKey(User, related_name='sent_messages', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='received_messages', on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    content = models.TextField()

    def __str__(self):
        return f"From: {self.sender} | To: {self.receiver} | Time: {self.timestamp}"


class Freelancer(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField(upload_to='profiles/', blank=True)
    name = models.CharField(max_length=100)
    tagline = models.CharField(max_length=255)
    bio = models.TextField(blank=True)
    website = models.URLField(blank=True)
    
    messages_sent = models.ManyToManyField(Message, related_name='freelancer_messages_sent')
    messages_received = models.ManyToManyField(Message, related_name='freelancer_messages_received')

    def __str__(self):
        return f"{self.id} | {self.name}"

class Business(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField(upload_to='profiles/', blank=True)
    name = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    messages_sent = models.ManyToManyField(Message, related_name='business_messages_sent')
    messages_received = models.ManyToManyField(Message, related_name='business_messages_received')

    def __str__(self):
        return f"{self.id} | {self.name}"

class JobPost(models.Model):
    business = models.ForeignKey(Business, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    skills_required = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.id} | {self.title}"
    
