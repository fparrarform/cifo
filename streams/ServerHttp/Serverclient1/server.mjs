import http from "http";
import qs from "querystring";




const server = http.createServer((request, response) => {
  let bodyString = "";
  request.setEncoding("utf8");
  request.on("data", data => {
    bodyString += data;
    });
  request.on("end", () => {
    let body = qs.parse(bodyString);
    for (let b in body) {
      response.write(b + ' = ' + body[b] + "\n");
    }
      response.end();
    });
});
server.listen(8000);