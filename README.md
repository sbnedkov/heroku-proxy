# heroku-proxy
A proxy that will forward to services like localtunnel.me

While developing an integration that required oAuth I forgot to give the service provider (that was the only one at that time that could do that) a second callback URL for localtunnel.me that will allow me to develop locally.

I guess that you can use this simple application to replace your Heroku app while developing if you are in the same situation.

Basically this is a proxy that will forward from Heroku.

Set the following config variable:

```heroku config:set LOCAL_URL=<your proxy, e.g. locatunnel.me URL here>```

Oh, yeah, it's also unsafe. :\
