var quoteListModel = require('../model/quoteListModel');

  function list_all_quotes(req, res){
      quoteListModel.scan()
      .then((response) => {
          //By default, it returns 200 OK
          res.json(response);
      })
      .catch((error) => {
          res.status(500);
          res.json(error);
      })
  }

  function add_new_quote(req, res){
    var quote = { name: "HelloWorld", quote: "This is a Test" };
    quote.name
      quoteListModel.put(quote)
      .then((fulfilled) => {
          res.status(201);
          res.json({alert: 'New Quote Created Successfully'});
      })
      .catch((error) =>{
          res.status(500);
          res.json({alert: 'Error from Controller'});
      })
  }

  module.exports = {
    'scan': list_all_quotes,
    'put': add_new_quote
};



  