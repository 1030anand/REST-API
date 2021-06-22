require("dotenv").config();
const http = require('http');     //created server by http module
const app = require('./app')

const host = process.env.HOST;
const port = process.env.PORT;


// const server = http.createServer((req,res)=>{
//     // res.writeHead(200,{"content-type":"text/plain"});
//     res.write("hello");
//     res.end();
// });
const server = http.createServer(app)
   
server.listen(port,()=>{
console.log(`my server get started on ${host} : ${port}`);
});