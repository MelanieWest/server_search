exports.findServer=function(serverArray){

    //search through an array of servers for the highest priority server
    // (lowest priority number) that is available.
    // return a promise that either responds with the server information
    // or rejects with an error message

    return new Promise((resolve, reject) => {
        // search for servers, the result of which will either:
        //
        //resolve("I found one!"); // fulfilled
        // or
        //reject("No server found"); // rejected

        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();

    });
}



function myAsyncFunction(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }