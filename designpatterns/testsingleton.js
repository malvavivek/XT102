let Singleton=require('./singletonES2015.1')

let inst1=new Singleton();
let inst2=new Singleton();
console.log(inst1===inst2)
console.log(Singleton.getData())
