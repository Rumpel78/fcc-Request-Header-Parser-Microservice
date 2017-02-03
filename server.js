var express = require('express')
var useragent = require('express-useragent');

var app = express()
var port = process.env.PORT || 8080;

app.use(useragent.express());

app.get('/', function (req, res) {
    var language = req.get('Accept-Language').split(';')[0].split(',')[0]
    var ipaddress = req.ip
    var software = req.useragent.platform + " - " + req.useragent.os
    var result = JSON.stringify(({ language: language, ipaddress: ipaddress, software: software}))
    res.setHeader('Content-Type', 'application/json')
    res.send(result)
})

app.listen(port, function () {
  console.log('App listening on port '+port)
})
