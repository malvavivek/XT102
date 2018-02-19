
export default class Observer {
    constructor(observers) {
        this.observers = [];//for multiple views
    }
    attach(cb) {//getting attached
        this.observers.push(cb);
    }
    notify(meal,calories) {
        this.observers.forEach((cb) => {
            cb(meal,calories);
        });
    }
}
