from django import forms

from django.forms.extras.widgets import SelectDateWidget
from django.core.exceptions import NON_FIELD_ERRORS
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from ConnectDB import Select_continent
from django.contrib.auth.forms import AuthenticationForm
from Our_MarketPlace.models import CompanyProfile, ProviderServers,CalculationsMetric




class ContactForm(forms.Form):
    subject = forms.CharField(max_length=100)
    message = forms.CharField()
    sender = forms.EmailField()
    cc_myself = forms.BooleanField(required=False)


class MonospaceForm(forms.Form):

    def addError(self, message):
        self._errors[NON_FIELD_ERRORS] = self.error_class([message])

class SignInForm(MonospaceForm): 
    email = forms.EmailField(
    required = True)    
    password = forms.CharField(
    required = True, 
    widget = forms.PasswordInput(render_value = False)  )

type_choices = (
                ('INC', 'INC'),
                ('LLC', 'LLC'),
                ('BV', 'BV'),
                ('BVBA','BVBA'),
                ('NV','NV'),
                ('Other','Other'),
                )

class ProviderServerForm1(forms.ModelForm):
    Operating_system = forms.ChoiceField(choices=(('*nix','*nix'),('Windows','Windows'),('Mac','Mac')))
    HDD_type = forms.ChoiceField(choices=(('SSD','SSD'),('SATA','SATA')))
    High_avaibilty=forms.ChoiceField(choices=(('False','False'),('True','True')))
    class Meta:
        model =ProviderServers
        fields = ['Server_Name', 'Processor_Cores','CPU_priority','RAM_Size','Hard_Disk_Drive','HDD_type','High_avaibilty','server_username','server_ip','server_password','Operating_system']
 

class ServerLocationForm(forms.ModelForm):
    Continent = forms.ChoiceField(choices=(('America','America'),('Europe','Europe'),('Asia','Asia'),('Africa','Africa'),('Australia','Australia')))
    class Meta:
        model =ProviderServers
        fields = ['Continent', 'Country', 'City','Server_Adress']
        
class CompanyForm(forms.ModelForm):    
    Providing_cloud_since = forms.ChoiceField(choices=(('2013','2013'),('2014','2014')))
    Corporation_type = forms.ChoiceField(choices=type_choices)
    Company_name =forms.CharField(max_length= 15)
    class Meta:
        model = CompanyProfile
        fields = ['Company_name', 'Corporation_type', 'Adress', 'Zip_code', 'Country', 'Providing_cloud_since']
 
class ModifyMetricForm(forms.ModelForm):
    GB_Ram_price = forms.CharField()
    CPU_core_price = forms.CharField()
    HDD_sata_price = forms.CharField()
    HDD_ssd_price = forms.CharField()
    CPU_priority = forms.CharField()
    Availibility_price = forms.CharField()
    class Meta:
        model = CalculationsMetric
        fields = ['GB_Ram_price','CPU_core_price','HDD_sata_price','HDD_ssd_price','CPU_priority','Availibility_price']   
        
class SignUpForm(UserCreationForm):
    email = forms.EmailField(label='Email address', max_length=75) 
    class Meta:
        model = User
        fields = ('username', 'email',) 

    def clean_email(self):
        email = self.cleaned_data["email"]
        try:
            user = User.objects.get(email=email)
            raise forms.ValidationError("This email address already exists. Did you forget your password?")
        except User.DoesNotExist:
            return email
    
        
    def save(self, commit=True):
        user = super(UserCreationForm, self).save(commit=False)
        password = user.set_password(self.cleaned_data["password1"])
        user.email = self.cleaned_data["email"]
        user.is_active = True # change to false if using email activation
        if commit:
            user.save()
            return user


