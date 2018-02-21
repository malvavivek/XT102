import Observer from "../observer/listenerorder";

export default class Model{
    
    constructor(id,meal,calorie){
     // this.static.total =0;
        this.id=id;
        this.meal=meal;
        this.calorie=calorie;
        this.orderAdd=new Observer();
    }
    addMeal(meal,calorie){
        total+=calorie;
        this.orderAdd.notify(meal,calorie,total);
    }
    
}