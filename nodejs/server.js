/**
 * Created by I326950 on 6/6/2016.
 */
var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {"content-Type": "text/html"});
    res.write("<h1>Node.js</h1>");
    res.end("<p>Hello Node.js</p>");
}).listen(1920);

console.log("Http Server is listening at port 1920.");