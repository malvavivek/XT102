const EventEmitter=require('events');
class Counter extends EventEmitter{
    constructor(){
       super();
     //  this.counter=0;
    }
    incrementData(c){
        var count=0;
        var t=setInterval(()=>{
            this.emit('start');
            this.emit('data',++count);
            if(count === c){
                this.emit('done',count);
                clearInterval(t);
            }
        },10)
       
          
    }
};
let eventEmitter= new Counter();

eventEmitter.incrementData(100);
eventEmitter.on('start',()=> console.log('started'));
eventEmitter.on('data',(contents)=>console.log('Receiving Data \n'+contents));

eventEmitter.on('done',(msg)=>console.log('done '+msg));
console.log('hii')