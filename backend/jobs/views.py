from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from django.views.generic.edit import FormView
from .forms import MessageForm
from .models import Message

from .models import Freelancer, Business, JobPost

class FreelancerListView(ListView):
    model = Freelancer

class FreelancerDetailView(LoginRequiredMixin, DetailView):
    model = Freelancer

class FreelancerCreateView(LoginRequiredMixin, CreateView):
    model = Freelancer
    fields = ['name', 'profile_pic', 'tagline', 'bio', 'website']
    success_url = reverse_lazy('jobpost-detail')

    def form_valid(self, form):
        form.instance.owner = self.request.user
        return super().form_valid(form)

class BusinessCreateView(LoginRequiredMixin, CreateView):
    model = Business
    fields = ['name', 'profile_pic', 'bio']
    success_url = reverse_lazy('freelancer-list')

    def form_valid(self, form):
        form.instance.owner = self.request.user
        return super().form_valid(form)

class JobPostCreateView(LoginRequiredMixin, CreateView):
    model = JobPost
    fields = ['title', 'description', 'skills_required']
    success_url = reverse_lazy('freelancer-list')

    def form_valid(self, form):
        business = Business.objects.get(owner=self.request.user)
        form.instance.business = business
        form.instance.created_at = timezone.now()
        return super().form_valid(form)

class JobPostListView(ListView):
    model = JobPost

class JobPostDetailView(DetailView):
    model = JobPost
    
class SendMessageView(FormView):
    template_name = 'send_message.html'
    form_class = MessageForm
    success_url = '//'  #the URL to redirect after sending the message

    def form_valid(self, form):
        content = form.cleaned_data.get('content')
        receiver_id = self.kwargs['receiver_id']  # Get the receiver_id from the URL parameters
        receiver = User.objects.get(pk=receiver_id)
        
        # Create the message
        sender = self.request.user
        message = Message.objects.create(sender=sender, receiver=receiver, content=content)
        sender.freelancer.messages_sent.add(message)  # Associate message with sender
        receiver.business.messages_received.add(message)  # Associate message with receiver

        return super().form_valid(form) 


@login_required
def handle_login(request):
    if request.user.get_freelancer():
        return redirect(reverse_lazy('jobpost-detail'))
    elif request.user.get_business():
        return redirect(reverse_lazy('freelancer-list'))
    
    return render(request, 'jobs/choose_account.html', {})
