var https =require("https");

function getAndPrintHTML(options){

https.get(options,function(options){

  options.setEncoding("utf-8");

  options.on("error", function(){
    console.log("there is error");
  });

  var result="";

  options.on("data", function(data){
    result += data;
  });

  options.on("end",function(){
    console.log(result);
    console.log("problem solved");
  });


});
}

var requestOptions={
  host: "sytantris.github.io",
  path: "/http-examples/step3.html"
};



getAndPrintHTML(requestOptions);


