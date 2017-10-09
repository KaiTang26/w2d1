var https =require("https");

function getHTML(options, callback){

  https.get(options, function(options){

    options.setEncoding("utf-8");

    options.on("error", function(){
      console.log("there is a error");

    });

    var result ="";

    options.on("data", function(data){
      result += data;

    });

    options.on("end", function(){
      console.log("data transfer done");
      callback(result);
    });

  });
}

function printHTML(html){
  console.log(html);
}

var requestOptions={
  host: "sytantris.github.io",
  path: "/http-examples/step4.html"
}


getHTML(requestOptions, printHTML);