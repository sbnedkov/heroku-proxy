import httpProxy from 'http-proxy';

if (!process.env.LOCAL_URL) {
    console.log('Please supply the LOCAL_URL environment variable.');
    process.exit(1);
}

var proxy = httpProxy.createProxyServer({
    target: process.env.LOCAL_URL,
    secure: false,
    changeOrigin: true
}).listen(process.env.PORT);

proxy.on('error', (err, req, res) => {
    res.writeHead(500, {
        'Content-Type': 'text/plain'
    });
    res.end('Proxy: something went wrong.');

    console.error(err);
});

console.log(`Proxy listening on port ${process.env.PORT} forwarding traffic to: ${process.env.LOCAL_URL}`);
