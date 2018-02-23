var quoteListModel = require('../model/quoteListModel');

//  express microweb server 
var express = require('express');
var app = express();

// var to store our persistence data
data = [];
var anyChanges = false;
console.log('Server startinng time: ' + Date.now());

// for parsing form data in json format
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup handlebars environmnet in express
var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({ defaultLayout: '', extname: '.hbs' }));

// Querying the database for the first time
function retrieve_quotes() {
    quoteListModel.scan()
    .then((response) => {
        // Populating our variable
        this.data = response;
        console.log("Data successfully retrieved.");
    })
    .catch((error) => {
        console.log(error);
    })
}
retrieve_quotes();


//   function list_all_quotes(req, res){

//       quoteListModel.scan()
//       .then((response) => {
//           //By default, it returns 200 OK
//           //res.json(response);
//         //   console.log(response);

//          res.render('show.hbs', {quotes: response.Items})
//       })
//       .catch((error) => {
//           res.status(500);
//           res.json(error);
//       })
//   }

  // Passing data to the client's machine (aka browser)
function list_all_quotes(req, res) {
    if (this.data != null) {
        res.render('show.hbs', {quotes: this.data.Items});
        console.log("Data successfully sent.");
        
    } else {
        res.status(500);
        res.json(error);
        console.log("Data unsuccessfully sent.");
    }
}


  function add_new_quote(req, res){
    var quote = (req.body);
    quote.name
    quoteListModel.put(quote)
    .then((fulfilled) => {
        res.status(201);
      //  res.json({alert: 'New Quote Created Successfully'});
    })
    .then((data) => {
        this.data.length = 0;
        console.log("Data cleared.");
        retrieve_quotes();
    })
    .catch((error) =>{
        res.status(500);
        res.json({alert: 'Error from Controller'});
    })
}

function getInputform(req, res) {

    res.render('index.hbs');

}

module.exports = {
'scan': list_all_quotes,
'put': add_new_quote,
'get': getInputform
};





  