
import Observer from "../observer/listeneraddress";
class Model{
    constructor(city,street){
        this.city= city;
        this.street=street;
        this.addressCopy = new Observer();   
    }
    copy(city,street){
     
        this.addressCopy.notify(city,street);
    }
}
export default new Model();