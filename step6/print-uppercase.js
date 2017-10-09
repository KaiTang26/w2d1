var getHTML = require("../http-functions");

function printUpperCaseHTML(html){

  console.log(html.toUpperCase());

}

var requestOptions={
  host: "sytantris.github.io",
  path: "/http-examples/step6/uppercase.html"
};

getHTML(requestOptions, printUpperCaseHTML);
