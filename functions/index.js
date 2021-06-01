const exporterBuffer = require('sass-export').buffer;
const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.getSassJson = functions.https.onRequest((request, response) => {
  exporterBuffer([Buffer.from(request.body)]).then((result) => {
    response.send(result);
  });
});

