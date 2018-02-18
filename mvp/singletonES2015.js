let Singleton = class Singleton{
    constructor(){
        throw new Error('cannot Construct object')

    }
  static getData(){
            return new Date();
    }
};
//module.exports =new Singleton();
console.log(Singleton.getData());
new Singleton();