
import Model from "../model/address";
export default class Controller{
    constructor(){
        this.model = Model;
    }
     copy(address){
         this.model.copy(address);
     }
}