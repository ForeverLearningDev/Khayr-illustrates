from django.urls import path
from . import views

urlpatterns = [
    path('', views.portfolio, name='portfolio'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('products/', views.products, name='products'),
    path('checkout/', views.checkout, name='checkout'),
    path('submit/', views.contact_form_submission, name='contact_form_submission')
]