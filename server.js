var express = require('express');
app = express();
var path = require('path');
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));

var routes = require('./routes/quoteListRoutes'); //importing route

routes(app); //register the route

// setup handlebars environmnet in express
var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({ defaultLayout: '', extname: '.hbs' }));

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(3000, function(){

    console.log("Web Server running on....port 3000");

    if (process.send) {
        process.send({ event:'online', url:'http://localhost:3000/quotes' });
    }

});
// console.log('todo list RESTful API server started on: 3000');