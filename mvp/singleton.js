let Singleton = (function() {
    let instance;
    let createInstance = function() {
        let object=new Object();
    }
    return {
        getInstance:function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
}());

let inst1 = Singleton.getInstance();
let inst2 = Singleton.getInstance();
console.log(inst1 === inst2)