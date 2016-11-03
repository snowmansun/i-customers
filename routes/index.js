
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });



    //var http = require('http');
    //var url = require('url');

    //http.createServer(function (request, response) {
    //    response.writeHead(200, { 'Content-Type': 'text/plain' });

    //    var params = url.parse(request.url, true).query;
    //    var input = params.number;

    //    var numInput = new Number(input);
    //    var numOutput = new Number(Math.random() * numInput).toFixed(0);

    //    response.write(numOutput);
    //    response.end();
    //}).listen(8124);

    //console.log('Random Number Generator');
    //const https = require('http');

    //https.get('http://180.166.98.86:5354/PricingSync/', (res) => {
    //    console.log('statusCode: ', res.statusCode);
    //    console.log('headers: ', res.headers);

    //    res.on('data', (d) => {
    //        process.stdout.write(d);
    //    });

    //}).on('error', (e) => {
    //    console.error(e);
    //});
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};
