
var MDhosting = '128.204.223.44'; //  

D('feer.me', noneRegistrar, DnsProvider(cloudflareProvider), DefaultTTL(180),

// Obsługa poczty na serwerze feer.me 
MX("@", 10, "mail62.mydevil.net."),
TXT('feer.me.','"v=spf1 mx a include:mail62.mydevil.net -all"'),   
// Serwer plików FTP + storage 
  A('storage',MDhosting),
  A('files',MDhosting),
  A('user-stoage',MDhosting),

//CNAME('jetbrains','feer.fls.jetbrains.com.'),

// tools.feer.me on Mirosoft Azure
CNAME('tools','gray-sea-0d8c7ba10.4.azurestaticapps.net.'),
A('stopka', MDhosting)


)