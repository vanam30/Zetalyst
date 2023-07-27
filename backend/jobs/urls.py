from django.urls import path

from .views import (
    BusinessCreateView,
    FreelancerCreateView,
    FreelancerDetailView,
    FreelancerListView,
    handle_login,
    JobPostCreateView,
    JobPostDetailView,
    JobPostListView,
    SendMessageView,
)

urlpatterns = [
    path('', FreelancerListView.as_view(), name='freelancer-list'),
    path('account-setup/', handle_login, name='handle-login'),
    path('developer/<int:pk>/', FreelancerDetailView.as_view(), name='freelancer-detail'),
    path('developer/create/', FreelancerCreateView.as_view(), name="freelancer-create"),
    path('business/create/', BusinessCreateView.as_view(), name="business-create"),
    path('jobpost/create/', JobPostCreateView.as_view(), name="jobpost-create"),
    path('jobpost/<int:pk>/', JobPostDetailView.as_view(), name='jobpost-detail'),
    path('jobpost/<int:pk>/', JobPostListView.as_view(), name='jobpost-list'),
    path('send/<int:receiver_id>/', SendMessageView.as_view(), name='send_message'),
]
