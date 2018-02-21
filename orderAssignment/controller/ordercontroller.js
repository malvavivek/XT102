
import Model from "../model/order";
export default class Controller{
    constructor(){
        this.model = Model;

    }
     copy(meal,calories){
         this.model.copy(meal,calories);
     }
}