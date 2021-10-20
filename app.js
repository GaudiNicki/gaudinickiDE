const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const routes = require('./routes/routes');

// ports
const httpPort = 80;
const httpsPort = 443;

// create http server
const httpApp = express();
const httpServer = http.createServer(httpApp);

httpServer.listen(httpPort, () => console.log('listening for http requests on port', httpPort));

// redirect all http requests to https
httpApp.get('*', (req, res) => res.redirect('https:' + req.headers.host + req.url));

// create https credentials
const credentials = {
    key: fs.readFileSync('/etc/letsencrypt/live/gaudinicki.de/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/gaudinicki.de/fullchain.pem')
}

// create httpsServer
const app = express();
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(httpsPort, () => console.log('listening for https requests on port', httpsPort));

// enable reverse proxy support
app.enable('trust proxy');

// register view engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', routes);

// 404 page
app.use((req, res) => res.status(404).render('404', { title: '404' }));