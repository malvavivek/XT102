import Model from "../model/city";
import View from "./view/cityview";

export default class Controller {
    constructor(){
        this.model= Model;
        this.elements = elements;
    }
    
    add(name) {
        this.model.add(name);
    }

    remove(index) {
        this.model.remove(index);
    }
    initialize(){
        this.model.cityAdded.attach((cityList)=>{
            this.render(cityList)
        })
        this.model.cityRemoved.attach((cityList)=>{
            this.render(cityList)
        })

        this.elements.addBtn.addEventListener('click',()=>{
            let newCity = prompt("Enter a new City");
            if(newCity){
                this.controller.add(newCity)
            }
        })
        this.elements.removeBtn.addEventListener('click',()=>{
            let index=
            this.elements.cityList.options.selectedIndex;
            if(index!=-1){
                this.controller.remove(index);
            }
        })
       
    }
}
