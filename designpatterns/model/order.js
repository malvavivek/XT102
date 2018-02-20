
import Observer from "../observer/listenerorder";
class Model{
    constructor(meal,calories,total){
        this.meal= meal;
        this.calories=calories;
        this.total=0;
        this.orderCopy = new Observer();  
        this.orderUpdate = new Observer();
        this.orderDelete = new Observer();
    }
    copy(meal,calories){
        this.meal= meal;
        this.calories=calories;
        this.total=this.total+parseInt(this.calories);
        this.orderCopy.notify(meal,calories,this.total);
    }
    update(meal,calories){
        this.meal= meal;
        this.calories=calories;
        
        this.orderUpdate.notify(meal,calories,this.total);
    }
    delete(meal,calories){
        this.meal= meal;
        this.calories=calories;
        
        this.orderDelete.notify(meal,calories,this.total);
    }
}
export default new Model();