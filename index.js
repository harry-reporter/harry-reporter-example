const path = require('path');
const express = require('express');

const PORT = 3000;
const HOST = '::';

const indexController = require('./controllers/indexController');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layout', extname: '.hbs' });

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', indexController);

// error handlers
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  const { status = 500, message } = err;

  // render the error page
  res.status(status);
  res.render('error', { status, message });
});

app.listen(PORT, HOST, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

module.exports = app;
