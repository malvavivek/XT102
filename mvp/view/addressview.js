import Controller from "../controller/interfacecontroller";
import Model from "../model/interfacemodel";
export default class View{
    constructor(elements){
        this.elements = elements;
        this.model = Model;
        this.controller = new Controller();
         
    }
    initialize(){
       
        this.model.addresscopied.attach((paymentAddress)=>{
            debugger;
            this.renderShippingAddress(paymentAddress);
        });
        this.elements.checkBox.addEventListener('change',(e)=>{
            if(e.target.checked){
                debugger;
                this.controller.copy(this.elements.paymentAddress.value);
            }
            else{
                this.elements.shippingAddress.value =" ";
            }
        });
    }
    renderShippingAddress(newAddress){
        debugger;
        this.elements.shippingAddress.value = newAddress;
        
    }
}
