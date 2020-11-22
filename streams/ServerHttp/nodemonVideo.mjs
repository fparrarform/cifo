import http from 'http';
import fs from 'fs';
const server = http.createServer();
server.on('request', function(req, res) {
   res.writeHead(200, {'Content-Type': 'video/mp4'});
   const fileChunk = fs.createReadStream("./NuclearExplosion.mp4")
 //res.write()
 fileChunk.pipe(res)
 //res.end();
});
server.listen(4000);