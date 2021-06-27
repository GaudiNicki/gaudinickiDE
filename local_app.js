const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const routes = require('./routes/routes');
const updatedRoutes = require('./routes/routes_updated');

// create http server listening on port 80
const httpApp = express();
const httpServer = http.createServer(httpApp);

httpServer.listen(8080, () => console.log('listening for http requests on port 8080'));

// redirect all http requests to https
httpApp.get('*', (req, res) => res.redirect('https:' + req.headers.host + req.url));

// create https credentials
const credentials = {
    key: fs.readFileSync('privkey.pem'),
    cert: fs.readFileSync('fullchain.pem')
}

// create httpsServer listening on port 443
const app = express();
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(8443, () => console.log('listening for https requests on port 8443'));

// enable reverse proxy support
app.enable('trust proxy');

// register view engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// updated design
app.use('/updated/', updatedRoutes);

// current design
app.use('/', routes);

// 404 page
app.use((req, res) => res.status(404).render('404', { title: '404' }));