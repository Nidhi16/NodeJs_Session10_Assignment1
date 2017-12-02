var http = require('http');

//function to check pallindrom number
function palindrome(str) {
    var len = str.length;
    console.log(len);
    console.log(len/2);
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        console.log(i);
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

var number = "123521";

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  var result = palindrome(number);
  if (result === true ) {
  	console.log("Given number/string" + " " + number + "is pallindrome");
  	response.end("Given number/string" + " " + number + " " +"is pallindrome.");
  } else {
  	console.log("Given number/string" + " " + number + "is not pallindrome");
  	response.end("Given number/string" + " " + number + " "+"is not pallindrome.");
  }
  
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);
