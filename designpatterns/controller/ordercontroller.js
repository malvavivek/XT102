
import Model from "../model/order";
export default class Controller{
    constructor(){
        this.model = Model;

    }
     copy(meal,calories){
         this.model.copy(meal,calories);
     }
     update(meal,calories){
        this.model.update(meal,calories);
    }
    delete(meal,calories){
        this.model.delete(meal,calories);
    }
    
}