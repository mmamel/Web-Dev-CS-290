/*
 * Write your server code in this file.  Don't forget to add your name and
 * @oregonstate.edu email address below.
 *
 * name: Melvin Ma
 * email: mamel@oregonstate.du
 */

var fs = require('fs');
var path = require('path');
var url = require('url');
var http = require('http');
const PORT = process.env.PORT || 3000;
var server = http.createServer (requestHandler);
console.log("server is listening on port " + PORT);
var indexHTML;
var indexJS;
var styleCSS;
var bennyJPG;
var fourHTML;
function requestHandler(request, response){
  if(request.url == '/index.html'){
    if(!indexHTML){
      fs.readFile('./public/index.html', 'utf-8', function(err,data){
        if(!err){
          //alternatively write headers like this
          response.writeHead(200, {
            'Content-Type': 'text/html'
          });
          // response.statusCode = 200;
          // response.setHeader("Content-Type", "text/html");
          response.write(data);
          response.end();
          indexHTML = data;
          console.log("Reading index.html");
        }
      });
    }
    else{
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.write(indexHTML);
      response.end();
    }

  }
  else if(request.url == '/'){
    if(!indexHTML){
      fs.readFile('./public/index.html', 'utf-8', function(err,data){
        if(!err){
          //alternatively write headers like this
          response.writeHead(200, {
            'Content-Type': 'text/html'
          });
          // response.statusCode = 200;
          // response.setHeader("Content-Type", "text/html");
          response.write(data);
          response.end();
          indexHTML = data;
          console.log("Reading index.html");

        }
      });
    }
    else{
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      reponse.write(indexHTML);
      response.end();
    }

  }
  else if(request.url === '/index.js'){
    if(!indexJS){
      fs.readFile('./public/index.js', 'utf-8', function(err,data){
        if(!err){
          response.statusCode = 200;
          response.setHeader("Content-Type", "application/javascript");
          response.write(data);
          response.end();
          indexJS = data;
          console.log("Reading index.js");

        }
      });
    }
    else{
      response.statusCode = 200;
      response.setHeader("Content-Type", "application/javascript");
      response.write(indexJS);
      response.end();
    }
  }
  else if(request.url === '/style.css'){
    if(!styleCSS){
      fs.readFile('./public/style.css', 'utf-8', function(err,data){
        if(!err){
          response.statusCode = 200;
          response.setHeader("Content-Type", "text/css");
          response.write(data);
          response.end();
          styleCSS = data;
          console.log("Reading style.css");

        }
      });
    }
    else{
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/css");
      response.write(styleCSS);
      response.end();
    }

  }
  else if(request.url === '/favicon.ico'){
      response.statusCode = 404;
      console.log("favicon not found");
  }
  else if(request.url === '/benny.jpg'){
    if(!bennyJPG){
      fs.readFile('./public/benny.jpg', function(err,data){
        if(!err){
          response.statusCode = 200;
          response.setHeader("Content-Type", "image/jpeg");
          response.write(data);
          response.end();
          bennyJPG = data;
          console.log("Reading benny.jpg");

        }
      });
    }
    else{
      response.statusCode = 200;
      response.setHeader("Content-Type", "image/jpg");
      response.write(bennyJPG);
      response.end();
    }

  }
  else{
    if(!fourHTML){
      fs.readFile('./public/404.html', 'utf-8', function(err,data){
        if(!err){
          response.statusCode = 404;
          response.setHeader("Content-Type", "text/html");
          response.write(data);
          response.end();
          fourHTML = data;
          console.log("Reading 404.html");

        }
      });
    }
    else{
      response.statusCode = 404;
      response.setHeader("Content-Type", "text/html");
      response.write(fourHTML);
      response.end();
    }
  }
  // console.log("== Received a request:", request.url);
  // console.log("== Type of request.url", typeof(request.url))
  // console.log("  -- req.method:", request.method);
  // response.statusCode = 200;
  // response.setHeader("Content-Type", "text/html");
  // response.write(resbody)
  //response.end();
}
server.listen(PORT);
