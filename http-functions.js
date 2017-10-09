var https = require("https");

module.exports=function getHTML(options, callback){

  https.get(options, function(options){
    options.setEncoding("utf-8");

    var result ="";

    options.on("error", function(){
      console.log("there is error");
    });

    options.on("data", function(data){
      result += data;
    });

    options.on("end", function(){
      console.log("data transfer done!")
      callback(result);
    });

  });
}