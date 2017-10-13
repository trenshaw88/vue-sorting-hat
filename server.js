var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);
IMPORTANT: What you probably noticed is that this will serve up a dist directory. dist is a predefined directory that Vue.js builds which is a compressed, minified version of your site. We’ll build this and then tell Heroku to run server.js so Heroku hosts up this dist directory:

