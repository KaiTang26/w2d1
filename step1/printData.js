var https = require("https");

function getAndPrintHTMLChunks(){

  var requesOptions={
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };

https.get(requesOptions, function(response){

// set response in utf8 code
  response.setEncoding("utf8");

  response.on("error", function(){
    console.log("there is an error");
  });

  response.on("data", function(data){
    console.log(`the chunk of data: ${data}, and data size: ${data.length}\n`);
  });

  response.on("end", function(){
    console.log("data transfering complete");
  });

});


}


getAndPrintHTMLChunks();

