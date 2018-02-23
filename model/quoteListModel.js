var AWS = require('aws-sdk');

/* 
# The following line is for consuming shared credential file in ~/.aws/credentials file.
var cred = new AWS.SharedIniFileCredentials({profile: 'onlineDynamodb'});*
AWS.config.credentials - cred;
# Uncomment it during the submission of the project 
*/
 
AWS.config.update({
    region: "ap-southeast-1",
    endpoint: "http://dynamodb.ap-southeast-1.amazonaws.com",
    /* Comment out the 'accessKeyId', 'secretAccessKey' */
    accessKeyId: "AKIAJFIVNHXZGG2LO4EQ",
    secretAccessKey: "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"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var schema = { TableName: "", Select: "", Item: quote };
var quote = { name: "", quote: "" };

exports.scan = function() {
    return new Promise(function (resolve, reject){
        schema.TableName = "quotelist2";
        schema.Select = "ALL_ATTRIBUTES";    ;    
        docClient.scan(schema, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })

} 

exports.put = function(quote){
    return new Promise(function (resolve, reject) {
        schema.TableName = "quotelist2";
        schema.Item = quote;
        docClient.put(schema, (err, data) => {
            if(err){
                console.log(err);
                reject(err);
            } else {
                console.log(data);
                resolve(data);
            }
        });
    });
};

