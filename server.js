var express = require('express');
app = express();
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/quoteListRoutes'); //importing route

routes(app); //register the route

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(3000);
console.log('todo list RESTful API server started on: 3000');