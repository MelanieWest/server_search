const https = require("https");

exports.findServer=function(serverArray){

    //search through an array of servers for the highest priority server
    // (lowest priority number) that is available.
    // return a promise that either responds with the server information
    // or rejects with an error message
    
    var url = serverArray[0].url;
    
    return new Promise((resolve, reject) => {
        // search for servers, the result of which will either:
        //
        //resolve("I found one!"); // fulfilled
        // or
        //reject("No server found"); // rejected

        https.get(url, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
              body += data;
            });
            res.on("end", () => {
                body = JSON.parse(body);
                resolve(body);
            });
            res.on("error",()=>{
                reject("No server found");
            })
     });
}
