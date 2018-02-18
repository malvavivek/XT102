export default class Observer {
    constructor (observers) {
        //array for multiple views
        this.observers = [];
    }
    attach(cb) {
        this.observers.push(cb);
    }
    notify(newCity) {
        this.observers.forEach((cb)=>{
            cb(newCity);
        })
    }
}