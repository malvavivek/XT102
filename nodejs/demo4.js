const fs=require('fs');
const EventEmitter=require('events');
class ReadFile extends EventEmitter{
    constructor(){
       super();
    }
    readData(asyncFunc,...fileArgs){
      asyncFunc(...fileArgs,(err,data)=>{
        this.emit('start');
            if(err){
              return this.emit('error',err);
            }
            const data1=data.toString().trim().split('\r\n')
           this.emit('data',data1)
           this.emit('done','completed')  ;
        })   
    }
};
let eventEmitter= new ReadFile();
eventEmitter.readData(fs.readFile,'file1','UTF-8');
eventEmitter.on('start',()=> console.log('started'));
eventEmitter.on('data',(contents)=>console.log('Receiving Data \n'+contents));
eventEmitter.on('error',(err)=>console.error(err));
eventEmitter.on('done',(msg)=>console.log('done '+msg));
console.log('Im first');