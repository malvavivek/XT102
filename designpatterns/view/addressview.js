import Controller from "../controller/addresscontroller";
import Model from "../model/address";
export default class View{
    constructor(elements){
        this.elements = elements;
        this.model = Model;
        this.controller = new Controller();
         
    }
    initialize(){
       
        this.model.addresscopied.attach((paymentCity,paymentStreet)=>{
            
            this.renderShippingAddress(paymentCity,paymentStreet);
        });
        this.elements.checkBox.addEventListener('change',(e)=>{
            if(e.target.checked){
                
                this.controller.copy(this.elements.paymentCity.value,this.elements.paymentStreet.value);
            }
            else{
                this.elements.shippingCity.value =" ";
                this.elements.shippingStreet.value =" ";
            }
        });
    }
    renderShippingAddress(newCity,newStreet){
        
        this.elements.shippingCity.value = newCity;
        this.elements.shippingStreet.value = newStreet;
        
    }
}
