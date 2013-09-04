from django.conf.urls import patterns, url, include
from dajaxice.core import dajaxice_autodiscover, dajaxice_config
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib.auth.decorators import login_required
from django.contrib import admin
admin.autodiscover()

from Our_MarketPlace import views as examples_views

dajaxice_autodiscover()

urlpatterns = patterns('', 
                       url(r'^$', 'Our_MarketPlace.views.home', name='home'),
                       url(r'^server_location/$', 'Our_MarketPlace.views.server_location', name='server_location'),
                       url(r'^modify_metric/$', 'Our_MarketPlace.views.modify_metric', name='modify_metric'),
                       url(r'^company_profile/$', login_required(examples_views.company_profile), name='company_profile'),
                       url(r'^accounts/id=(?P<user_id>[-\w]+)/$','Our_MarketPlace.views.accounts', name='accounts'),
                       url(r'^get_information/id=(?P<user_id>[-\w]+)/$','Our_MarketPlace.views.get_information', name='get_information'),
                       url(r'^company_servers/id=(?P<user_id>[-\w]+)/$','Our_MarketPlace.views.company_servers', name='company_servers'),
                       url(r'^status/id=(?P<server_id>[-\w]+)/uid=(?P<user_id>[-\w]+)$','Our_MarketPlace.views.change_server_status',name='status'),
                       url(r'^filter/$', 'Our_MarketPlace.views.filter', name='filter'),
                       url(r'^filtrrer/$', 'Our_MarketPlace.views.filtrer', name='filtrer'),
                       url(r'^pricing/$','Our_MarketPlace.views.pricing',name='pricing'),
                       url(r'^modify_account/$', 'Our_MarketPlace.views.modify_account',name='modify_account'),
                       url(r'^add_server/$', 'Our_MarketPlace.views.add_server',name='add_server'),
                       url(r'^display_servers/$','Our_MarketPlace.views.display_servers',name='display_servers'),
                       url(r'^sign_up/','Our_MarketPlace.views.sign_up', name='sign_up'),
                       url(dajaxice_config.dajaxice_url, include('dajaxice.urls')),
                       url(r'^admin/', include(admin.site.urls)),
                       url(r'^accounts/login/$', 'Our_MarketPlace.views.sign_in', name='login'),
                       url(r'^sign_out/$', 'Our_MarketPlace.views.sign_out', name='sign_out'),
                       url(r'^contact/$', 'Our_MarketPlace.views.contact'),
                     )

urlpatterns += staticfiles_urlpatterns()
