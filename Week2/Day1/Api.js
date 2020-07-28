var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest()

let url= 'https://restcountries.eu/rest/v2/all'

// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url, true);
request.send();
request.onload = function() {
var data = JSON.parse(this.response)
console.log(data);
}
