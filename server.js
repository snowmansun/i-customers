var express = require('express');
var app = express();
var fs = require("fs");
var routes = require('./routes');
var http = require('http');
var path = require('path');


// all environments
app.set('port', process.env.PORT || 8384);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//添加的新用户数据
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

app.get('/addUser', function (req, res) {
    // 读取已存在的数据
    fs.readFile(__dirname + "/model/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/model/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})


var server = app.listen(8384, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

