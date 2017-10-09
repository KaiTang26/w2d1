var https = require("https");


function getAndPrintHTML(){

  var requestOptions={
    host: "sytantris.github.io",
    path: "/http-examples/step2.html"
  };

https.get(requestOptions, function(response){

  response.setEncoding("utf-8");

  response.on("error", function(){
    console.log("there is an error");
  });

  var context ="";

  response.on("data", function(data){
    if(data){
      context+=data;
    }
  });

  // console.log(context);



  response.on("end", function(){
    console.log("no more data available");
    console.log(context);

  });

});



}


getAndPrintHTML();