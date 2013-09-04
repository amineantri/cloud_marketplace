import urllib

import socket
ip_address = socket.gethostbyname(socket.gethostname())
response = urllib.urlopen('http://api.hostip.info/get_html.php?ip=%s&position=true').read() %(ip_address)

print(response)