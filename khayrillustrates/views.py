from django.shortcuts import render
from django.core.mail import send_mail
from django.http import JsonResponse, HttpResponse
from django.conf import settings

# Create your views here.

def contact_form_submission(request):
    if request.method == 'POST':
        name = request.POST.get('contact-name')
        email = request.POST.get('contact-email')
        phone = request.POST.get('contact-number')
        comment = request.POST.get('contact-comment')

        # Compose the email
        subject = 'New Contact Form Submission'
        message = f'Name: {name}\nEmail: {email}\nPhone: {phone}\nComment: {comment}'
        
        recipient_list = ['kareem9.3@icloud.com']  # Replace with your email address
        
        try:
            send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, recipient_list)
            return JsonResponse({"message": "Success"}, status=200)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return HttpResponse(status=405)  # Return 405 Method Not Allowed if not POST


def portfolio(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about-us.html')

def contact(request):
    return render(request, 'contact-us.html')

def products(request):
    return render(request, 'shop.html')

def checkout(request):
    return render(request, 'checkout.html')