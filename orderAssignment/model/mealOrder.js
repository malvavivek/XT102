import Observer from "../observer/listenerorder";

export default class Model{
    
    constructor(id,meal,calories){
     // this.static.total =0;
        this.id=id;
        this.meal=meal;
        this.calories=calories;
        this.orderAdd=new Observer();
    }
    addMeal(meal,calories){
        total+=calories;
        this.orderAdd.notify(meal,calories,total);
    }
}