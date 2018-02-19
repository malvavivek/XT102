
import Model from "../model/order";
export default class Controller{
    constructor(){
        this.model = Model;
    }
     copy(meal,calories,total){
         this.model.copy(meal,calories,total);
     }
}