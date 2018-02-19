
export default class Observer {
    constructor(observers) {
        this.observers = [];//for multiple views
    }
    attach(cb) {//getting attached
        this.observers.push(cb);
    }
    notify(meal,calories,total) {
        this.observers.forEach((cb) => {
            cb(meal,calories,total);
        });
    }
}

