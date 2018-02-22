var AWS = require('aws-sdk');
var quoteListModel = require('../model/quoteListModel');

AWS.config.update({
    region: "ap-southeast-1",
    endpoint: "http://dynamodb.ap-southeast-1.amazonaws.com",
    accessKeyId: "AKIAJFIVNHXZGG2LO4EQ",
    secretAccessKey: "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"
  });


  function list_all_quotes(req, res){
      console.log(">>> Hits controller")
      quoteListModel.scan()
      .then((response) => {
          console.log(">>> Controller Promise OK!");
          res.json(response)
      })
      .catch((error) => {
          console.log(">>> Controller Promise not OK!");
          res.json(error);
      })
  }

//   function add_new_quote(req, res){
//       quoteListModel.add
//       .then((fulfilled) => {
//           res.json(fulfilled);
//       })
//       .catch((error) =>{
//           res.json(error);
//       })
//   }

  module.exports = {
    'scan': list_all_quotes,
    // add: add_new_quote
};



  