
from models import ProviderServers
from bottle import Bottle, run
import json

app = Bottle()

@app.post('/host/<name1>/<hostname2>/<port3>/<public_key4>')
def add_cloud(name1, hostname2, port3, public_key4):
    #AjouterCloud.objects.create(name = name1,hostname=hostname2, port = port3, public_key = public_key4)
    ProviderServers.objects.filter()    
    return name1

def ss(name1, hostname2, port3, public_key4):
    ProviderServers.objects.create(name = name1,hostname=hostname2, port = port3, public_key = public_key4)
   
    file = open('json_files/hosts.json')
    response = json.load(file)

run(app, host='127.0.0.1', port=8080, debug=True)