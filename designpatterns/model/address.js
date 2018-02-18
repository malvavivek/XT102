
import Observer from "../observer/listeneraddress";
class Model{
    constructor(city,street){
        this.city= city;
        this.street=street;
        this.addresscopied = new Observer();   
    }
    copy(city,street){
     
        this.addresscopied.notify(city,street);
    }
}
export default new Model();