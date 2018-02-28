fs=require('fs')
const http=require('http');
http.createServer().on('request', (req,res)=>{
  switch(req.url){
      case'/api':
        res.writeHead(200,{'content-type':'text/plain'});//200 is success status
        res.end(JSON.stringify(new Date()));
        break;
        case'/home':
        case'/about':
        res.writeHead(200,{'content-type':'text/html'});//200 is success status
        res.end(fs.readFileSync(`.${req.url}.html`));
        break;
        case'/':
        res.writeHead(301,{'location':'/home'})
        res.end();
        break;
        default:
        res.writeHead(404);
        res.end();
    }
}).listen(8001,()=>console.log('Server started on 8001'));