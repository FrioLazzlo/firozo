/**
 * Created by Frio on 24. 5. 2015.
 */
var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/unit-testing', function (req, res) {
    res.render('unit-testing');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});