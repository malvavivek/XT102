const EventEmitter=require('events');
class Counter extends EventEmitter{
    constructor(){
       super();
     //  this.counter=0;
    }
    readData(counter){
        var count=0;
        setTimeout(()=>{
            this.emit('start');
        for(let i=0;i<counter;i++){   
         count+=1;
         this.emit('data',count);
        }
        this.emit('done','completed')  ; 
        },10)
    }
};
let eventEmitter= new Counter();
eventEmitter.readData(100);
eventEmitter.on('start',()=> console.log('started'));
eventEmitter.on('data',(count)=>console.log('Receiving Data \n'+count));
eventEmitter.on('done',(msg)=>console.log('done '+msg));