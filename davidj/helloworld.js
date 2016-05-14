var http = require("http"),
    url = require("url");

var mensaje = "hola mundo server";

http.createServer(function(req, res) {
    var path = url.parse(req.url).pathname;
    console.log(path);
    if (path == '/'){
        res.writeHead("200", {
            'Content-Type': "text/plain; charset=utf-8"
        });
        res.end(mensaje);
    } else if (path == '/solo'){
         res.writeHead("200", {
            'Content-Type': "text/plain; charset=utf-8"
        });
        res.end("EStas solo");
    } else {
         res.writeHead("404", {
            'Content-Type': "text/plain; charset=utf-8"
        });
        res.end("busca bien");
    }
}).listen(process.env.PORT, process.env.IP);

console.log('http://' + process.env.IP + ':' + process.env.PORT + '/')