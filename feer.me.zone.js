
D('feer.me', noneRegistrar, DnsProvider(cloudflareProvider), DefaultTTL(3600),
A('@','2.57.137.47'),
// Obsługa poczty na serwerze feer.me 
MX("@", 10, "mail.feer.me."),
TXT('feer.me.','"v=spf1 a mx include:_spf.atthost.pl -all"'),   
// Serwer plików FTP + storage 

  A('storage','91.205.73.214'),
  A('files','91.205.73.214'),

// ### Serwery szkoleniowe ### 
A('edu','4.210.90.156'),
A('adas','192.109.244.170'), 
// Tools for Foundation IT 
A('stopka', '91.205.73.212'),
A('tools','91.205.73.211'),
A('bugtracker','91.205.73.212'),
CNAME('jetbrains','feer.fls.jetbrains.com.'),

// Serwer beta - rozwój nowej strony 
A('beta','185.255.40.57'),
// Platforma kontaktowa
A('kontakt','4.231.171.125')
);