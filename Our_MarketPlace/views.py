# -*-coding:utf-8 -*
from django.views.generic import TemplateView
from django.shortcuts import HttpResponseRedirect, HttpResponse, redirect, render_to_response,render
from django.template import Context, loader, RequestContext
from django.conf import settings
import json, httplib
from django.core.urlresolvers import reverse
from django import forms
from ConnectDB import ConvertSymbol,Select_WHERE,Select_WHERE2,Select_WHERE3,Select_WHERE4,Select_continent
from models import ProviderServers,CompanyProfile,CalculationsMetric,Comment
from django.contrib.auth import authenticate, login,logout, get_user
from django.contrib.sessions.models import Session
from django.contrib.auth.models import User
from calcul_metric import calculations_user_metric
from forms import ContactForm,SignUpForm,SignInForm,CompanyForm, ProviderServerForm1, ServerLocationForm,ModifyMetricForm
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth.models import AnonymousUser
from django.contrib.auth.decorators import login_required
import datetime
from django.core.mail import EmailMessage




def home(request):
    uid = request.session.get('user')
    if uid is None:
        return render_to_response('home.html',{},RequestContext(request) )
    else:
        return render_to_response('home.html', {'username': User.objects.get(pk=uid)},RequestContext(request) )

def pricing(request):
    return render_to_response('pricing.html',RequestContext(request) )


@csrf_protect
def sign_in(request):
    if request.method == 'POST':
        form = SignInForm(request.POST)
        if form.is_valid():
            results = User.objects.filter(email=form.cleaned_data['email'])
            if len(results) == 1:
                if results[0].check_password(form.cleaned_data['password']):
                    request.session['user'] = results[0].pk
            email = request.POST['email']
            password = request.POST['password']
            user = authenticate(username=email, password=password)
            if user is not None:
                if user.is_active:
                    login(request, user)  
                    return HttpResponseRedirect('/company_profile/')
                else :
                    form.addError('Account Disabled')
            else:
                form.addError('Incorrect email address or password')
        else:
            form.addError('Incorrect email address or password')
    else:
        form = SignInForm()
    

    return render_to_response('sign_in.html',{'form': form,},RequestContext(request) )

def filtrer(request):
    return render_to_response('filtrer.html',RequestContext(request) )
    

def sign_up(request):
    if request.method == 'POST':
        data = request.POST.copy()
        form = SignUpForm(data)
            
        if form.is_valid():
            user = form.save()
            results = User.objects.filter(email=form.cleaned_data['email'])
            if len(results) == 1:
                if results[0].check_password(form.cleaned_data['password1']):
                    request.session['user'] = results[0].pk
            email =request.POST['email']
            password1 = request.POST['password1']
            user = authenticate(username=email, password=password1)
            login(request, user)  
            return HttpResponseRedirect('/company_profile/')

    else:
        form = SignUpForm()

    return render_to_response('sign_up.html', {'form':form},
                              context_instance=RequestContext(request))

    
    
def sign_out(request):
    try:
        logout(request)
        request.session.flush()
        request.user = AnonymousUser
    except KeyError:
        pass
    return HttpResponseRedirect("/")



@login_required
def company_profile(request):
    uid = request.session.get('user')
    data = CompanyProfile.objects.filter(user_name_id=uid).count()
    if data ==0 : 
        if request.method == 'POST':
            form = CompanyForm(request.POST)
            if form.is_valid():
                CompanyProfile.objects.create(user_name_id =uid, Company_name=request.POST['Company_name'], Corporation_type=request.POST['Corporation_type'], Adress= request.POST['Adress'], Zip_code=int(request.POST['Zip_code']), Country=request.POST['Country'], Providing_cloud_since=int(request.POST['Providing_cloud_since']))
                
                return HttpResponseRedirect(reverse('accounts', args=(),   kwargs={'user_id': uid}))  
        else :
        
            form = CompanyForm()
            return render_to_response('sign_up2.html', {'form':form},
                              context_instance=RequestContext(request))
    else :
        return HttpResponseRedirect(reverse('accounts', args=(),   kwargs={'user_id': uid}))  


def accounts(request,user_id):
    uid = request.session.get('user')
    if uid !=int(user_id) or uid == -1 :
        for item in CompanyProfile.objects.filter(user_name_id=user_id).values() :
            Company_name = item['Company_name']
        if request.method == 'POST':
            Comment.objects.create(user_name_id =user_id,sender_name=request.POST['name'],sender_email=request.POST['email'],message=request.POST['message'])
            data = Comment.objects.filter(user_name_id=user_id).values()
            return render_to_response('accounts.html', {'Company_name':'Company_name','data':data,'user_id':user_id,},context_instance=RequestContext(request))
        else :
            data = Comment.objects.filter(user_name_id=user_id).values()
            return render_to_response('accounts.html', {'Company_name':Company_name,'data':data,'user_id':user_id,},context_instance=RequestContext(request))
    else :
        data = CompanyProfile.objects.filter(user_name_id=uid).values()
        for item in data :
            Company_name = item['Company_name']
        data1 = Comment.objects.filter(user_name_id=uid).values()
        return render_to_response('myprofile.html', {'Company_name':Company_name,'data':data1 },context_instance=RequestContext(request))
    
def get_information(request,user_id):
    data = CompanyProfile.objects.filter(user_name_id=user_id).values()
    for item in data :
        Company_name = item['Company_name']
    return render_to_response('get_info.html', {'data':data,'user_id':user_id,'Company_name':Company_name },context_instance=RequestContext(request))

def company_servers(request,user_id):
    for item in CompanyProfile.objects.filter(user_name_id=user_id).values() :
        Company_name = item['Company_name']
    data = ProviderServers.objects.filter(user_name_id=user_id).values('id','Server_Name','Processor_Cores','RAM_Size','Hard_Disk_Drive','HDD_type','Operating_system')
    if data :
        if CalculationsMetric.objects.filter(user_name_id=user_id).count() ==1 :
            for item in data:
                item['prize'] =calculations_user_metric(user_id,item['id'])     
        else :
            item['prize'] =calculations_user_metric('-1',item['id']) 
        
        return render_to_response('company_servers.html', {'data':data,'user_id':user_id,'Company_name':Company_name},
                              context_instance=RequestContext(request))
    else :
        return render_to_response('company_servers.html', {},
                              context_instance=RequestContext(request))
    
    

@login_required                              
def display_servers(request):
    uid = request.session.get('user')
    data = ProviderServers.objects.filter(user_name_id=uid).values('id','Server_Name','Processor_Cores','RAM_Size','Hard_Disk_Drive','HDD_type','Operating_system')
    if data :
        metric = CalculationsMetric.objects.filter(user_name_id=uid).values('user_name')
        for item in metric :
            metric = int(item['user_name'])
        for item in data:
            if metric == uid :
                item['prize'] =calculations_user_metric(uid,item['id'])     
            else :
                item['prize'] =calculations_user_metric('-1',item['id']) 
        
        return render_to_response('display_servers.html', {'data':data},
                              context_instance=RequestContext(request))
    else :
        return render_to_response('display_servers.html', {},
                              context_instance=RequestContext(request))

@login_required        
def modify_account(request):
    uid = request.session.get('user')
    if request.method == 'POST':
        form = CompanyForm(request.POST)
        if form.is_valid():
            CompanyProfile.objects.filter(user_name_id=uid).update(user_name_id=uid,Company_name=request.POST['Company_name'], Corporation_type=request.POST['Corporation_type'], Adress= request.POST['Adress'], Zip_code=int(request.POST['Zip_code']), Country=request.POST['Country'], Providing_cloud_since=int(request.POST['Providing_cloud_since']))            
            return HttpResponseRedirect(reverse('accounts', args=(),   kwargs={'user_id': uid}))  
    else :
        form = CompanyForm()
    return render_to_response('modify_account.html', {'form':form},
                              context_instance=RequestContext(request))
    
@login_required
def add_server(request):
    if request.method == 'POST':
        data = request.POST.copy() 
        form = ProviderServerForm1(data)     
        if form.is_valid():
            uid = request.session.get('user')
            ProviderServers.objects.create(user_name_id =uid, Server_Name =request.POST['Server_Name'], Processor_Cores =request.POST['Processor_Cores'],CPU_priority=request.POST['CPU_priority'] , RAM_Size =request.POST['RAM_Size'] , Hard_Disk_Drive =request.POST['Hard_Disk_Drive'], HDD_type=request.POST['HDD_type'], Operating_system =request.POST['Operating_system'],High_avaibilty = request.POST['High_avaibilty'],server_username= request.POST['server_username'],server_ip= request.POST['server_ip'],server_password=request.POST['server_password'])                           
            return HttpResponseRedirect('/server_location/')
    else:
        form = ProviderServerForm1()

    return render_to_response('add_server.html', {'form':form},
                              context_instance=RequestContext(request))

@login_required
def server_location(request):
    if request.method == 'POST':
        form1 = ServerLocationForm(request.POST)  
        if form1.is_valid():
            uid = request.session.get('user')
            for item in ProviderServers.objects.filter(user_name_id =uid).values('id'):
                server_id = item['id']
            ProviderServers.objects.filter(id=server_id).update(Continent = request.POST['Continent'],Country = request.POST['Country'],City = request.POST['City'],Server_Adress = request.POST['Server_Adress'])
            return HttpResponseRedirect(reverse('accounts', args=(),   kwargs={'user_id': uid}))
    else:
        form1 = ServerLocationForm()

    return render_to_response('server_location.html', {'form':form1},
                              context_instance=RequestContext(request))
    
@login_required
def modify_metric(request):
    if request.method == 'POST':
        form1 = ModifyMetricForm(request.POST)  
        if form1.is_valid():
            uid = request.session.get('user')
            metric = CalculationsMetric.objects.filter(user_name_id=uid).values('user_name')
            for item in metric :
                metric = int(item['user_name'])
            if metric == uid :
                CalculationsMetric.objects.filter(user_name_id=uid).update(GB_Ram_price=request.POST['GB_Ram_price'],CPU_core_price= request.POST['CPU_core_price'],HDD_sata_price = request.POST['HDD_sata_price'],HDD_ssd_price  = request.POST['HDD_ssd_price'],CPU_priority = request.POST['CPU_priority'],Availibility_price = request.POST['Availibility_price'])
            else :
                CalculationsMetric.objects.create(user_name_id=uid,GB_Ram_price=request.POST['GB_Ram_price'],CPU_core_price= request.POST['CPU_core_price'],HDD_sata_price = request.POST['HDD_sata_price'],HDD_ssd_price  = request.POST['HDD_ssd_price'],CPU_priority = request.POST['CPU_priority'],Availibility_price = request.POST['Availibility_price'])

            return HttpResponseRedirect(reverse('accounts', args=(),   kwargs={'user_id': uid}))
    else:
        form1 = ModifyMetricForm()

    return render_to_response('modifymetric.html', {'form':form1},
                              context_instance=RequestContext(request))
    

@login_required
def change_server_status(request, server_id,user_id):
    uid = request.session.get('user')
    for item in User.objects.filter(id=uid).values('email') :
        sender = str(item['email']) 
    for item in User.objects.filter(id=user_id).values('email') :
        recipient = str(item['email'])
    for item in ProviderServers.objects.filter(id=user_id).values('server_username','server_ip','server_password'):
        username = item['server_username']
        server_ip = item['server_ip']
        server_password =  item['server_password']
    message = 'Hi,\n After completing your Payment process, now you can access to your server via SSH (Secure Shell).\n First of all, You need to install openssh-client(using command "apt-get install openssh-client") then you have to use this configuration to access to your server.\n "ssh %s@%s" \n and this is password : "%s" \n thank you for your using our martketplace' %(username,server_ip,server_password) 
    
    email = EmailMessage('Your SSH access', message , to=[sender, recipient])
    email.send()
    today = datetime.date.today()
    ProviderServers.objects.filter(id=server_id).update(Server_Status='Not available',Selling_date=today)
    return HttpResponseRedirect(reverse('accounts', args=(),   kwargs={'user_id': int(user_id)})) 

def filter(request):
    continents = Select_continent()
    uid = request.session.get('user')
    if request.method == 'POST':  
        continent = request.POST.get('combox1')
        country = request.POST.get('combox2')
        city = request.POST.get('combox3')
        street = request.POST.get('combox4')
        currency = request.POST.get('combox5')
        if continent == 'Select..' :
            error ='Choose at least a continent.' 
            data = {}
            filtered = {}
        else :
            error = {}
            if country == 'Select..' :
                data = Select_WHERE2(continent, currency,uid)
                filtered = {'continent'}
            else :
                if city == 'Select..' : 
                    data = Select_WHERE3(continent,country, currency,uid)
                    filtered = {'continent','country'}
                else :
                    if street == 'Select..' :
                        data = Select_WHERE4(continent, country, city,currency,uid)
                        filtered = {'continent','country','city'}
                    else :
                        data = Select_WHERE(continent, country, city,street,currency,uid)
                        filtered = {'continent','country','city','street'}
        if data == [] :
            message = 'No server exists with this filter'
        else :
            message = '' 
        symbol = ConvertSymbol(currency)
        return render_to_response('filter.html', {'message':message, 'data': data,'symbol':symbol, 'items': continents,'error':error, 'filtered':filtered}, RequestContext(request))       
   
    return render_to_response('filter.html', {'items': continents,}, RequestContext(request))



def contact(request):
    if request.method == 'POST': # If the form has been submitted...                                                                                                                                                 
        form = ContactForm(request.POST) # A form bound to the POST data                                                                                                                                             
        if form.is_valid(): # All validation rules pass                                                                                                                                                              
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            sender = form.cleaned_data['sender']
            cc_myself = form.cleaned_data['cc_myself']
            return HttpResponseRedirect('/success') # Redirect after POST                                                                                                                                            
    else:
        form = ContactForm() # An unbound form                                                                                                                                                                       
    return render_to_response('contact.html', { 'form': form, })
