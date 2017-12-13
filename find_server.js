const https = require("https");
const request = require("request")

exports.findServer=function(serverArray){

    //search through an array of servers for the highest priority server
    // (lowest priority number) that is available.
    // return a promise that either responds with the server information
    // or rejects with an error message
    
    const url = serverArray[0].url;
    
    return new Promise((resolve, reject) => {
        // search for servers, the result of which will either:
        //
        //resolve("I found one!"); // fulfilled
        // or
        //reject("No server found"); // rejected

        request.get(url, (error, response, body) => {
            let json = JSON.parse(body);
            if(error){
                return reject(error);
            }
            return resolve(body);
          });       //end of request

});         //end of promise construction

}


