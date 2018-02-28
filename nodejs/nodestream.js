const fs = require('fs');
const util=require('util');
const http=require('http');
const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');
const console2 = new console.Console(out,err);
setInterval(()=>{
    console2.log(new Date());
    console2.error(new Error('oopsss'));
},5000)
const debuglog=require('debug')('web');
http.createServer().on('request', (req,res)=>{
    debuglog('Http Request:%s',req.url);
    res.writeHead(200,{'content-type':'text/plain'});//200 is success status
    res.end(new Date().toString());
}).listen(8000,()=>console2.log('Server started on 8000'));