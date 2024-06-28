
var dnsCal = ['ns1.cal.pl.','ns2.cal.pl.']
var MDhosting = '128.204.223.44'; 


D('feer.org.pl', noneRegistrar, DnsProvider(cloudflareProvider), DefaultTTL(3600),
// Strona WWW główny portal - aktualnie TROL IM 
    A('@', '92.43.119.38' ,CF_PROXY_OFF),
    CNAME('www','feer.org.pl.'),
    TXT('@','816d92fc11980b87aade041e078398cdf504386abb6c18ce6960d130f706230'),


// Konfiguracja GSuite dla FEER
    MX('@',1,'ASPMX.L.GOOGLE.COM.'),
    MX('@',5,'ALT1.ASPMX.L.GOOGLE.COM.'),
    MX('@',5,'ALT2.ASPMX.L.GOOGLE.COM.'),
    MX('@',10,'ALT3.ASPMX.L.GOOGLE.COM.'),
    MX('@',10,'ALT4.ASPMX.L.GOOGLE.COM.'),
    TXT('@', 'v=spf1 include:_spf.mlsend.com include:_spf.google.com ~all'),  
    TXT('google._domainkey','v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAip8C1EwwbX8guVGpFaBkr0DRjB9ar/SKeRiMZ13BasuGYShP20a+VB4rDbR7k1CUS/hr/yu1D7XJpY0jqOohH1QIEhVCyTv6tSONVPSMYFlQlGBTEOEuob4ZheVBgQzyYAbKGWoZkzusvJnT5nNFH6MZ5MMra9gtacCgtXQ8V6Tn36JDUFi3tJO9tZ/mNkzfI6W21dIg7DoKc85RnDxmZ+pmoDp2/yEI9S+uXsVoVq7jchNUgClT8DWN56DN9zzZmflQ6vai9Unww1hhM1FHa1imkwFPPY+dTPnmIkm3J6SEHOyZF1uEECEyNZElhL7UU1qhgXzsJEiwzT65jRq76wIDAQAB'),
    CNAME('litesrv._domainkey','litesrv._domainkey.mlsend.com.'),
    

// CRM - tymczasowo na MyDevil
    A('crm2',MDhosting),

// RCP - na MyDevil
  A('czaspracy',MDhosting),
  A('rcp',MDhosting),

    // GRID na Azure
    A('grid','51.12.245.0'),
    A('waken','51.12.245.0'),



  //Okta CAS
  TXT('_acme-challenge.cas','xA6O9d7bIs3X5C3x2hiRmzJRmDcLfMakqCwcIRGXZrQ'),
  CNAME('cas','feerorg.customdomains.okta.com.')

  );
  
