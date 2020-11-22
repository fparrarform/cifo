import http from "http";
import qs from "querystring";
const body = qs.stringify({
      foo: "bar",
      baz: [1, 2]
  });



const request = http.request({
  hostname: "localhost",
  port: 8000,
  path: "/",
  method: "POST",
  headers: {
    "Host": "localhost:8000",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(body)
    }
  }, 
  response => {
    response.setEncoding("utf8");
    response.on("data", data => {
    process.stdout.write(data);
    });
  response.on("end", () => console.log());
  });
  request.end(body)