# -*-coding:utf-8 -*
from models import CalculationsMetric,ProviderServers
def calculations_metric (param) :
    p = CalculationsMetric.objects.filter(user_name=-1).values()
    for row in p:
        RAM_prices = float(row['GB_Ram_price'])
        Core_prices = float(row['CPU_core_price'])
        HHD_SATA_prices =float(row['HDD_sata_price'])
        HHD_SSD_prices =float(row['HDD_ssd_price'])
        CPU_priority = float(row['CPU_priority'])
        Avaibility = float(row['Availibility_price'])
        
    p2 = ProviderServers.objects.filter(id=param).values()
    for row in p2:
        Core_price = int(row['Processor_Cores']) * Core_prices
        Priority_price = int(row['CPU_priority']) * CPU_priority
        RAM_price = int(row['RAM_Size']) * RAM_prices 
        if row['High_avaibilty'] == 'True' :
            Availibility_price = Avaibility
        else :
            Availibility_price = 0
        if row['HDD_type'] == 'SATA':
            HDD_price = int(row['Hard_Disk_Drive']) * HHD_SATA_prices
        elif row['HDD_type'] == 'SSD':
            HDD_price = int(row['Hard_Disk_Drive']) * HHD_SSD_prices         
     
    price = Core_price + Priority_price + RAM_price + HDD_price + Availibility_price
    return price    
    
                    
def calculations_user_metric (param1,param2) :
    p = CalculationsMetric.objects.filter(user_name=param1).values()
    for row in p:
        RAM_prices = float(row['GB_Ram_price'])
        Core_prices = float(row['CPU_core_price'])
        HHD_SATA_prices =float(row['HDD_sata_price'])
        HHD_SSD_prices =float(row['HDD_ssd_price'])
        CPU_priority = float(row['CPU_priority'])
        Avaibility = float(row['Availibility_price'])
 
    p2 = ProviderServers.objects.filter(id=param2).values()
    for row in p2:
        Core_price = int(row['Processor_Cores']) * Core_prices
        Priority_price = int(row['CPU_priority']) * CPU_priority
        RAM_price = int(row['RAM_Size']) * RAM_prices 
        if row['High_avaibilty'] == 'True' :
            Availibility_price = Avaibility
        else :
            Availibility_price = 0
        if row['HDD_type'] == 'SATA':
            HDD_price = int(row['Hard_Disk_Drive']) * HHD_SATA_prices           
        elif row['HDD_type'] == 'SSD':
            HDD_price = int(row['Hard_Disk_Drive']) * HHD_SSD_prices
    
    price = Core_price + RAM_price + HDD_price +Priority_price + Availibility_price
    return price