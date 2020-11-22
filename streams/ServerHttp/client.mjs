import http from "http";
const request = http.request({
  hostname: "localhost",
  port: 4000,
  path: "/",
  method: "GET",
  headers: {"Host": "localhost:4000"    }
}, 
response => {
  let statusCode = response.statusCode;
  let headers = response.headers;
  let statusLine = "HTTP/" + response.httpVersion + " " + statusCode + " " + http.STATUS_CODES[statusCode];
  console.log(statusLine);
  for (let header in headers) {
          console.log(header + ": " + headers[header]); 
  }
  console.log();
  response.setEncoding("utf8");
  response.on("data", data => {
          process.stdout.write(data); 
    });
  response.on("end", function() {
          console.log();
  });});
request.end();