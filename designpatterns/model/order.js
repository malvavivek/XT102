
import Observer from "../observer/listenerorder";
class Model{
    constructor(){
        this.order= [];
        
        this.total=0;
        this.orderCopy = new Observer();  
        this.orderUpdate = new Observer();
        this.orderDelete = new Observer();
    }
    copy(meal,calories){
        
               
        //this.total=this.total+parseInt(this.calories);
        this.orderCopy.notify(this.meal,this.calories,this.total);
    }
    // update(meal,calories){
    //     this.meal= meal;
        
        
    //     this.orderUpdate.notify(this.meal,this.calories,this.total);
    // }
    // delete(meal,calories){
    //     this.meal= meal;
        
        
    //     this.orderDelete.notify(meal,calories,this.total);
    // }
}
export default new Model();