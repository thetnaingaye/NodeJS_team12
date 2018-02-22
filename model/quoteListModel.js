var AWS = require('aws-sdk');
AWS.config.update({
    region: "ap-southeast-1",
    endpoint: "http://dynamodb.ap-southeast-1.amazonaws.com",
    accessKeyId: "AKIAJFIVNHXZGG2LO4EQ",
    secretAccessKey: "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"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var schema = { TableName: "", Select: "" };
var quote = { name: "", quote: "" };

exports.scan = function() {
    return new Promise(function (resolve, reject){
        schema.TableName = "quotelist2";
        schema.Select = "ALL_ATTRIBUTES";    
        console.log(">>> Hits Model...");    
        docClient.scan(schema, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })

} 
// var add = new Promise(function (resolve, reject) {
//     docClient.add(quote, (err, data) => {
//         if(err){
//             reject(err);
//         } else {
//             resolve(data);
//         }
//     })
// }
