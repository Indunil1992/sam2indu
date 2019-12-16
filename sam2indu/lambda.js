let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    debugger;
    ddb.delete({
        TableName: "testIndu",
        Key: {
            test: "18"
        }
    }).promise()
        .then(data => {
            // your code goes here
            console.log("dataaaaa");
        })
        .catch(err => {
            console.log("errrrrrr");
            // error handling goes here
        });

    return { "message": "Successfully executed with ddb" };
};