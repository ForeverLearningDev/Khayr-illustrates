from django.shortcuts import render

# Create your views here.

def home (request):
    return render(request, 'index.html')

def about (request):
    return render(request, 'about-us.html')

def contact (request):
    return render(request, 'contact-us.html')

def products (request):
    return render(request, 'shop.html')

def checkout (request):
    return render(request, 'checkout.html')