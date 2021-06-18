const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const routes = require('./routes/routes');

// create http server listening on port 80
const httpApp = express();
const httpServer = http.createServer(httpApp);

httpsServer.listen(80, () => console.log('listening for http requests on port 80'));

// redirect all http requests to https
httpApp.get('*', (req, res) => res.redirect('https:' + req.headers.host + req.url));

// create https credentials
const credentials = {
    key: fs.readFileSync('/etc/letsencrypt/live/gaudinicki.de/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/gaudinicki.de/fullchain.pem')
}

// create httpsServer listening on port 443
const app = express();
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, () => console.log('listening for https requests on port 443'));

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