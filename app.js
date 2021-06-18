const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const routes = require('./routes/routes');

// http express app
const httpApp = express();
const httpServer = http.createServer(httpApp);

// listen for http requests on port 80
httpServer.listen(80, () => console.log('listening for http requests on port 80'));

// redirect http to https
httpApp.get('*', function(req, res) {  
    res.redirect('https://' + req.headers.host + req.url);
})

// create https credentials
const credentials = {
    key: fs.readFileSync('/etc/letsencrypt/live/gaudinicki.de/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/gaudinicki.de/fullchain.pem')
}

// https express app
const httpsApp = express();
const httpsServer = https.createServer(credentials, httpsApp);

httpsServer.listen(443, () => console.log('listening for https requests on port 443'));

// register view engine
httpsApp.set('view engine', 'ejs');

// middlewares
httpsApp.use(express.static('public'));
httpsApp.use(express.urlencoded({ extended: true }));

// routes
httpsApp.use('/', routes);

// 404 page
httpsApp.use((req, res) => res.status(404).render('404', { title: '404' }));