from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import User

   

   
class ProviderServers(models.Model):
    user_name = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL)
    Server_Name = models.CharField(max_length=15)
    Processor_Cores = models.IntegerField(max_length=2)
    CPU_priority = models.IntegerField(validators=[MaxValueValidator(100),MinValueValidator(0)])
    RAM_Size = models.IntegerField(max_length=2)
    Hard_Disk_Drive = models.IntegerField(max_length=4)
    HDD_type = models.CharField(max_length=4,default=('SSD','SATA'))
    High_avaibilty = models.CharField(max_length=5,default='False')
    Operating_system = models.CharField(max_length=10)
    Continent = models.CharField(max_length=15)
    Country = models.CharField(max_length=15)
    City  = models.CharField(max_length=15)
    Server_Adress = models.CharField(max_length=100)
    server_username = models.CharField(max_length=100)
    server_ip = models.CharField(max_length=100)
    server_password = models.CharField(max_length=100)
    Server_Status = models.CharField(max_length=100,default='Free')
    Selling_date = models.DateTimeField(null=True)
    
class AjouterCloud(models.Model):
    user_name = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=15)
    hostname = models.CharField(max_length=15)
    port = models.IntegerField()
    public_key = models.CharField(max_length=100)
    
class CompanyProfile(models.Model):
    user_name = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL)
    Company_name = models.CharField(max_length=15)
    Corporation_type= models.CharField(max_length=6)
    Adress = models.CharField(max_length=30)
    Zip_code = models.IntegerField(max_length=4)
    Country = models.CharField(max_length=30)
    Providing_cloud_since=models.IntegerField(max_length=4)

class Comment(models.Model):
    user_name = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL)
    sender_name = models.CharField(max_length=15)
    sender_email = models.EmailField()
    message = models.CharField(max_length=1000)
    
class CalculationsMetric(models.Model):
    user_name = models.ForeignKey(User, blank=True, null=True, on_delete=models.SET_NULL)
    GB_Ram_price= models.FloatField(default=5)
    CPU_core_price = models.FloatField(default=10)
    HDD_sata_price = models.FloatField(default=12)
    HDD_ssd_price = models.FloatField(default=15)
    CPU_priority = models.FloatField(default=4)
    Availibility_price = models.FloatField(default=20) 
    
    