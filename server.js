//modules
const http = require('http'); //create and listen to server, network request
const fs = require('fs') // access disk
const url = require('url'); //changing url - request
const querystring = require('querystring'); //fetch - query param
const figlet = require('figlet') //ASCII art

//Create a server
const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    //Homepage, read and display index.html file when page url is '/'
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    //if path name is '/otherpage, read otherpage.html file and display it on the DOM
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    
    
    if('student' in params){
      if(params['student']== 'flip'){

        res.writeHead(200, {'Content-Type': 'application/json'});
        let flipResult = Math.ceil(Math.random() * 2) === 1 ? 'heads' : 'tails'

        const objToJson = {
          flip: flipResult,
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
          }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
