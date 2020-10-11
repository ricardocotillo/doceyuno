from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('product-customizer/', include('product_customizer.urls')),
    path('shop/', include('shop.urls')),
    path('account/', include('accounts.urls')),
    path('auth/', include('customauth.urls')),
    path('', include('www.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    