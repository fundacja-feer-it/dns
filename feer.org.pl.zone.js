
var dnsCal = ['ns1.cal.pl.','ns2.cal.pl.']
D('feer.org.pl', noneRegistrar, DnsProvider(cloudflareProvider), DefaultTTL(3600),
// Strona WWW główny portal - aktualnie TROL IM 
    A('@', '92.43.119.38' ,CF_PROXY_OFF),
    CNAME('www','feer.org.pl.'),

// Konfiguracja GSuite dla FEER
    MX('@',1,'ASPMX.L.GOOGLE.COM.'),
    MX('@',5,'ALT1.ASPMX.L.GOOGLE.COM.'),
    MX('@',5,'ALT2.ASPMX.L.GOOGLE.COM.'),
    MX('@',10,'ALT3.ASPMX.L.GOOGLE.COM.'),
    MX('@',10,'ALT4.ASPMX.L.GOOGLE.COM.'),
    TXT('@','v=spf1 include:_spf.google.com ~all'),
    TXT('google._domainkey','v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAip8C1EwwbX8guVGpFaBkr0DRjB9ar/SKeRiMZ13BasuGYShP20a+VB4rDbR7k1CUS/hr/yu1D7XJpY0jqOohH1QIEhVCyTv6tSONVPSMYFlQlGBTEOEuob4ZheVBgQzyYAbKGWoZkzusvJnT5nNFH6MZ5MMra9gtacCgtXQ8V6Tn36JDUFi3tJO9tZ/mNkzfI6W21dIg7DoKc85RnDxmZ+pmoDp2/yEI9S+uXsVoVq7jchNUgClT8DWN56DN9zzZmflQ6vai9Unww1hhM1FHa1imkwFPPY+dTPnmIkm3J6SEHOyZF1uEECEyNZElhL7UU1qhgXzsJEiwzT65jRq76wIDAQAB'),
    

   // OKTA - punkt logowania 
    TXT('_acme-challenge.login.feer.org.pl.','_MJJh0OuEEK5K8bR0_SCrai7jAbV_XCzqPsqsEdx4uc'),
    CNAME('login','trial-4733887.customdomains.okta.com.'),
  
  // CAL  - delegacje adresów technicznych - tymczasowe 

  Delegation_NS('mailing',dnsCal),
  Delegation_NS('helpdesk',dnsCal)

    );
  
