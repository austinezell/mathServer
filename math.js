'use strict'

let http = require('http')

let PORT = 8000;

let server = http.createServer((req, res) =>{
  let urlElements = req.url.split("/");
  if (urlElements[1].toLowerCase() === "math"){
    let result = 0
    switch (urlElements[2].toLowerCase()) {
      case "plus":
        result = parseFloat(urlElements[3]) + parseFloat(urlElements[4])
        res.write("<h1>" + result + "</h1>")
        break;
      case "minus":
        result = parseFloat(urlElements[3]) - parseFloat(urlElements[4])
        res.write("<h1>" + result + "</h1>")
        break;
      case "divide":
        result = parseFloat(urlElements[3]) / parseFloat(urlElements[4])
        res.write("<h1>" + result + "</h1>")
        break;
      case "multiply":
        result = parseFloat(urlElements[3]) * parseFloat(urlElements[4])
        res.write("<h1>" + result + "</h1>")
        break;
      default:
        res.write("<h1>ERORRORORORO</h1>")
    }

  }
  else {
    res.statusCode = 404;
    res.write("<h1>YOU SUCK</h1>")
    res.end()
  }
  res.end()
})

server.listen(PORT, () => {
  console.log("Server Running");
})
