
import Observer from "../observer/listeneraddress";
class Model{
    constructor(address){
        this.address= address;
        this.addresscopied = new Observer();   
    }
    copy(address){
     
        this.addresscopied.notify(address);
    }
}
export default new Model();