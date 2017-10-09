var getHTML = require("../http-functions");

function print1337(html){

  var ans=html.replace(/er/ig, "0r").replace(/ck/ig, "x").replace(/you/ig, "j00").replace(/a/ig, "4").replace(/e/ig, "3").replace(/l/ig, "1").replace(/o/ig, "0").replace(/s/ig, "5").replace(/t/ig, "7");

  console.log(ans);

}

var requestOptions={
  host: "sytantris.github.io",
  path: "/http-examples/step6/1337.html"
};

getHTML(requestOptions, print1337);