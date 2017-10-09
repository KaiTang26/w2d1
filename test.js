var getHTML =require("./http-functions")

var requestOptions ={
  host: "sytantris.github.io",
  path: "/http-examples/step5.html"
}

getHTMl.getHTML(requestOptions, function(html){
  console.log(html)
})