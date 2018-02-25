
export default class Observer {
    constructor(observers) {
        this.observers = [];//for multiple views
    }
    attach(cb) {//getting attached
        this.observers.push(cb);
    }
    notify(meals) {
        this.observers.forEach((cb) => {
            cb(meals);
        });
    }
}

