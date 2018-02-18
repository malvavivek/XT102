import Controller from "../controller/addresscontroller";
import Model from "../model/address";
export default class View{
    constructor(elements){
        this.elements = elements;
        this.model = Model;
        this.controller = new Controller();
         
    }
    initialize(){
       
        this.model.addresscopied.attach((paymentAddress)=>{
            
            this.renderShippingAddress(paymentAddress);
        });
        this.elements.checkBox.addEventListener('change',(e)=>{
            if(e.target.checked){
                
                this.controller.copy(this.elements.paymentAddress.value);
            }
            else{
                this.elements.shippingAddress.value =" ";
            }
        });
    }
    renderShippingAddress(newAddress){
        
        this.elements.shippingAddress.value = newAddress;
        
    }
}
