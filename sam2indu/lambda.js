let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    ddb.delete({
        TableName: "testIndu",
        Key: {
            test: "18"
        }
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });

    return { "message": "Successfully executed" };
};