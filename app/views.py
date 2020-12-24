from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse,Http404
from app.filters import regfilter

from app.models import register,registerserilizer
from app.forms import registerforms

def index(request):
    register=registerforms()
    return render(request,'index.html',{'form':register})

def save(request):
    name = request.GET['name'];
    email = request.GET['email'];
    reg = register(name=name,email=email);
    try:
        reg.save();
        return HttpResponse('true')
    except:
        return HttpResponse('false')

def view(request):
    l=list();
    regi = register.objects.all();
    for c in regi:
        ser = registerserilizer(c);
        l.append(ser.data)
    print (l);
    import json
    return HttpResponse(json.dumps(l))

def deletereg(request):
    try:
        print(request.GET['id']);
        regi = register.objects.get(id = request.GET['id']);
        regi.delete();
        return HttpResponse('true')
    except:
        return HttpResponse('false')

def search(request):
    try:
        n=(request.GET['name'])
        regi = register.objects.get(name = n);
        return HttpResponse('true');
    except:
        return HttpResponse('false');
        