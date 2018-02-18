
import Model from "../model/address";
export default class Controller{
    constructor(){
        this.model = Model;
    }
     copy(city,street){
         this.model.copy(city,street);
     }
}