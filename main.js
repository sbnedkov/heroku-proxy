import httpProxy from 'http-proxy';

if (!process.env.LOCAL_URL) {
    console.log('Please supply the LOCAL_URL environment variable.');
    process.exit(1);
}

var proxy = httpProxy.createProxyServer({
    target: process.env.LOCAL_URL,
    secure: false
}).listen(process.env.PORT);

proxy.on('error', (err) => {
    console.error(err);
    process.exit(1);
});

console.log(`Proxy listening on port ${process.env.PORT} forwarding traffic to: ${process.env.LOCAL_URL}`);
