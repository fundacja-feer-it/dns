
var MDhosting = '128.204.223.44'; 

D('feer.me', noneRegistrar, DnsProvider(cloudflareProvider), DefaultTTL(180),

A('@','128.204.223.44'),
MX('@',1,'ASPMX.L.GOOGLE.COM.'),
MX('@',5,'ALT1.ASPMX.L.GOOGLE.COM.'),
MX('@',5,'ALT2.ASPMX.L.GOOGLE.COM.'),
MX('@',10,'ALT3.ASPMX.L.GOOGLE.COM.'),
MX('@',10,'ALT4.ASPMX.L.GOOGLE.COM.'),
TXT('@', 'v=spf1 include:_spf.mlsend.com include:_spf.google.com ~all'),
TXT('@','google-site-verification=SU8LiqePlnSYyB-WXjLTQ1mg1SLl5LnnlYrA5btNNn0'),

// Obsługa skrzynek współdzielonych - shared-mailbox.feer.me
A('shared-mailbox',MDhosting),
A('civicrm',MDhosting)

  );