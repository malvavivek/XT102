
export default class Observer {
    constructor(observers) {
        this.observers = [];//for multiple views
    }
    attach(cb) {//getting attached
        this.observers.push(cb);
    }
    notify(city,street) {
        this.observers.forEach((cb) => {
            cb(city,street);
        });
    }
}
