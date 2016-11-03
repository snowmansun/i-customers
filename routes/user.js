<span style="font-family:SimSun;font-size:14px;">/*
 * GET users listing.
 */

    var users = require('../model/users').users;

    exports.list = function(req, res) {
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.send(users);
    };

    exports.get = function(req, res) {
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.send(users[req.param('id')]);
    };


    exports.delete = function(req, res) {
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
    delete users[req.param('id')];
    res.send({status:"success", message: "delete user success"});
    console.log(users);
    };


    exports.update = function(req, res) {
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
    users[req.body.id]= req.body;
    res.send({status:"success", message: "update user success"});
    console.log(users);
    };


    exports.add = function(req, res) {
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
    console.log(req.body);
    users[req.body.id]= req.body;
    res.send({status:"success", message: "add user success"});
    console.log(users);
    }; </span>