from dajaxice.decorators import dajaxice_register
from dajax.core import Dajax


from ConnectDB import Select_country, Select_city, Select_street


@dajaxice_register
def updatecombo1(request, option):
    dajax = Dajax()
    if option != 'Select..' :
        options=Select_country(option)
        out = ["<option value='Select..'>Select..</option>"]
        dajax.assign('#combo3', 'innerHTML', ''.join(out))
        dajax.assign('#combo4', 'innerHTML', ''.join(out))
        for row in options:
            out.append("<option value='%s'>%s</option>" % (row[1], row[1]))
        dajax.assign('#combo2', 'innerHTML', ''.join(out))
        return dajax.json()
    else :
        out = ["<option value='Select..'>Select..</option>"]
        dajax.assign('#combo2', 'innerHTML', ''.join(out))
        dajax.assign('#combo3', 'innerHTML', ''.join(out))
        dajax.assign('#combo4', 'innerHTML', ''.join(out))
        return dajax.json()    

@dajaxice_register
def updatecombo2(request, option):
    dajax = Dajax()
    if option != 'Select..' :
        options=Select_city(option)
        out = ["<option value='Select..'>Select..</option>"]
        dajax.assign('#combo4', 'innerHTML', ''.join(out))
        for row in options:
            out.append("<option value='%s'>%s</option>" %(row[1],row[1]))
        dajax.assign('#combo3', 'innerHTML', ''.join(out))
        return dajax.json()
    else :
        out = ["<option value='Select..'>Select..</option>"]
        dajax.assign('#combo3', 'innerHTML', ''.join(out))       
        dajax.assign('#combo4', 'innerHTML', ''.join(out))
        return dajax.json() 
    
@dajaxice_register
def updatecombo3(request, option):
    dajax = Dajax()
    if option != 'Select..' :     
        options=Select_street(option)
        out = ["<option value='Select..'>Select..</option>"]
        for row in options:
            out.append("<option value='%s'>%s</option>" %(row[1],row[1]))
        dajax.assign('#combo4', 'innerHTML', ''.join(out))
        return dajax.json()
    else :
        out = ["<option value='Select..'>Select..</option>"]
        dajax.assign('#combo4', 'innerHTML', ''.join(out))
        return dajax.json() 