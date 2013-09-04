# -*-coding:utf-8 -*

from calcul_metric import calculations_metric
import json, urllib2
from models import ProviderServers, CompanyProfile


def ConvertSymbol(currency):
    if currency =='EURO':
        symbol ='€'
    elif currency == 'GBP':
        symbol ='£'
    elif currency =='CNY':
        symbol = '元'
    elif currency == 'JPY':
        symbol = '¥'
    else:
        symbol ='$' 
    return symbol
def ConvertCurrency(currency):
    if currency == '1':
        currency = 'EURO'
    elif currency == '2' :
        currency ='GBP'
    elif currency == '3' :
        currency = 'CNY'
    elif currency == '4':
        currency = 'JPY' 
    else:
        currency ='USD'
  

        
def Select_WHERE(continent, country,city, street,currency,param):
    p = ProviderServers.objects.filter(Continent=continent,Country=country,City=city,Server_Adress=street).exclude(Server_Status='Not available').exclude(user_name_id=param, Server_Status='Not available').values()
    if currency == 'USD' or currency == 'Select..':
        rate = 1
    else :
        url = "http://rate-exchange.appspot.com/currency?from=USD&to=" + currency
        response = urllib2.urlopen(url)
        result = json.load(response)
        rate = result['rate']
    
    servers = []
    for item in p :
        result = {}
        result['server_id'] = item['id']
        result['Server_Name'] = item['Server_Name']
        result['Prize'] = calculations_metric(int(item['id'])) *rate
        result['Processor_Cores'] = int(item['Processor_Cores'])
        result['CPU_priority'] = int(item['CPU_priority'])
        result['RAM_Size'] = int(item['RAM_Size'])
        result['Hard_Disk_Drive'] = int(item['Hard_Disk_Drive'])
        result['HDD_type'] = item['HDD_type']
        result['High_avaibilty'] = item['High_avaibilty']
        result['Continent'] = item['Continent']
        result['Country'] = item['Country']
        result['City'] = item['City']
        result['Operating_system'] = item['Operating_system']
        result['user_id'] = int(item['user_name_id'])
        for item2 in CompanyProfile.objects.filter(user_name=item['user_name_id']).values('Company_name'):
            result['Company_name'] = item2['Company_name']
        servers.append(result)
    return servers

def Select_WHERE2(continent,currency,param):
    p = ProviderServers.objects.filter(Continent=continent).exclude(Server_Status='Not available').exclude(user_name_id=param).values()
    if currency == 'USD' or currency == 'Select..':
        rate = 1
    else :
        url = "http://rate-exchange.appspot.com/currency?from=USD&to=" + currency
        response = urllib2.urlopen(url)
        result = json.load(response)
        rate = result['rate']
    
    servers = []
    for item in p :
        result = {}
        result['server_id'] = item['id']  
        result['Server_Name'] = item['Server_Name']
        result['Prize'] = calculations_metric(int(item['id'])) *rate
        result['Processor_Cores'] = int(item['Processor_Cores'])
        result['CPU_priority'] = int(item['CPU_priority'])
        result['RAM_Size'] = int(item['RAM_Size'])
        result['Hard_Disk_Drive'] = int(item['Hard_Disk_Drive'])
        result['HDD_type'] = item['HDD_type']
        result['High_avaibilty'] = item['High_avaibilty']
        result['Continent'] = item['Continent']
        result['Country'] = item['Country']
        result['City'] = item['City']
        result['Operating_system'] = item['Operating_system']
        result['user_id'] = int(item['user_name_id'])
        for item2 in CompanyProfile.objects.filter(user_name=item['user_name_id']).values('Company_name'):
            result['Company_name'] = item2['Company_name']
        servers.append(result)
    return servers

def Select_WHERE3(continent,country,currency,param):
    p = ProviderServers.objects.filter(Continent=continent,Country=country).exclude(Server_Status='Not available').exclude(user_name_id=param).values()
    if currency == 'USD' or currency == 'Select..':
        rate = 1
    else :
        url = "http://rate-exchange.appspot.com/currency?from=USD&to=" + currency
        response = urllib2.urlopen(url)
        result = json.load(response)
        rate = result['rate']
    
    servers = []
    for item in p :
        result = {}
        result['server_id'] = item['id']  
        result['Server_Name'] = item['Server_Name']
        result['Prize'] = calculations_metric(int(item['id'])) *rate
        result['Processor_Cores'] = int(item['Processor_Cores'])
        result['CPU_priority'] = int(item['CPU_priority'])
        result['RAM_Size'] = int(item['RAM_Size'])
        result['Hard_Disk_Drive'] = int(item['Hard_Disk_Drive'])
        result['HDD_type'] = item['HDD_type']
        result['High_avaibilty'] = item['High_avaibilty']
        result['Continent'] = item['Continent']
        result['Country'] = item['Country']
        result['City'] = item['City']
        result['Operating_system'] = item['Operating_system']
        result['user_id'] = int(item['user_name_id'])
        for item2 in CompanyProfile.objects.filter(user_name=item['user_name_id']).values('Company_name'):
            result['Company_name'] = item2['Company_name']
      
        servers.append(result)
    return servers

def Select_WHERE4(continent, country,city, currency,param):
    p = ProviderServers.objects.filter(Continent=continent,Country=country,City=city).exclude(user_name_id=param).exclude(Server_Status='Not available').values()
    if currency == 'USD' or currency == 'Select..':
        rate = 1
    else :
        url = "http://rate-exchange.appspot.com/currency?from=USD&to=" + currency
        response = urllib2.urlopen(url)
        result = json.load(response)
        rate = result['rate']
    
    servers = []
    for item in p :
        result = {}
        result['server_id'] = item['id']  
        result['Server_Name'] = item['Server_Name']
        result['Prize'] = calculations_metric(int(item['id'])) *rate
        result['Processor_Cores'] = int(item['Processor_Cores'])
        result['CPU_priority'] = int(item['CPU_priority'])
        result['RAM_Size'] = int(item['RAM_Size'])
        result['Hard_Disk_Drive'] = int(item['Hard_Disk_Drive'])
        result['HDD_type'] = item['HDD_type']
        result['High_avaibilty'] = item['High_avaibilty']
        result['Continent'] = item['Continent']
        result['Country'] = item['Country']
        result['City'] = item['City']
        result['Operating_system'] = item['Operating_system']
        result['user_id'] = int(item['user_name_id'])
        for item2 in CompanyProfile.objects.filter(user_name=item['user_name_id']).values('Company_name'):
            result['Company_name'] = item2['Company_name']
      
        servers.append(result)
    return servers


def Select_continent():
    p = ProviderServers.objects.values('Continent').distinct()
    continents = []
    for item in p :
        continents.append((item['Continent'],item['Continent']))
    return continents

def Select_country(option):
    p = ProviderServers.objects.filter(Continent=option).values('Country').distinct()
    countries=[]
    for row in p:
        countries.append((row['Country'],row['Country']))
    return countries

def Select_city(opt):
    p = ProviderServers.objects.filter(Country=opt).values('City').distinct()
    cities = []
    for row in p:
        cities.append((row['City'],row['City']))
    return cities
def Select_street(opt):
    p = ProviderServers.objects.filter(City=opt).values('Server_Adress').distinct()
    Server_Adress = []
    for row in p:
        Server_Adress.append((row['Server_Adress'],row['Server_Adress']))
    return Server_Adress