
import Observer from "../observer/listenerorder";
class Model{
    constructor(meal,calories,total){
        this.meal= meal;
        this.calories=calories;
        this.total=0;
     
        this.orderCopy = new Observer();   
    }
    copy(meal,calories){
        this.meal= meal;
        this.calories=calories;
        this.total+=this.calories;
        this.orderCopy.notify(meal,calories,this.total);
    }
}
export default new Model();