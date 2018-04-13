const dotnev = require("dotenv");
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

//To load all configuration from .env file
dotnev.config({
    slient: true
});
dotnev.load();

const app = express();
const server = http.createServer(app);
app.set("port", process.env.port || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token, X-Day');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.listen(app.get('port'), function () {
    console.log('server running on - Port: %d in %s mode', app.get('port'), app.get('env'), '- Process ID: ' + process.pid);
});