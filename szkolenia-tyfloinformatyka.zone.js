var MDhosting = '128.204.223.44'; var PLanka 

D('szkolenia-tyfloinformatyka.pl', noneRegistrar, DnsProvider(cloudflareProvider), DefaultTTL(3600),


A('@', MDhosting ,CF_PROXY_OFF),
CNAME('www', 'szkolenia-tyfloinformatyka.pl.', CF_PROXY_ON),
A('platforma','128.204.223.44'),
MX('@',10,'mail62.mydevil.net.'),
TXT('@','v=spf1 a mx include:mailX.mydevil.net -all')





);
