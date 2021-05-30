const express = require('express');
const routes = require('./routes/routes');

// express app
const app = express();

// listen for requests
app.listen(3000, () => console.log('listening for requests on port 3000'));

// register view engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', routes);

// 404 page
app.use((req, res) => res.status(404).render('404', { title: '404' }));