const fs = require('fs');
const https = require('https');
const express = require('express');
const routes = require('./routes/routes');

// create https credentials
const credentials = {
    key: fs.readFileSync('/etc/letsencrypt/live/gaudinicki.de/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/gaudinicki.de/fullchain.pem')
}

// https express app
const app = express();
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, () => console.log('listening for https requests on port 443'));

// enable reverse proxy support
app.enable('trust proxy');

// redirect http to https
app.use((req, res, next) => {
    if (req.secure) {
            // request was via https, so do no special handling
            next();
    } 
    else {
            // request was via http, so redirect to https
            res.redirect('https://' + req.headers.host + req.url);
    }
});

// register view engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', routes);

// 404 page
app.use((req, res) => res.status(404).render('404', { title: '404' }));