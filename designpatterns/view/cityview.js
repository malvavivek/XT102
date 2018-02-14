import Model from "../model/city";
import Controller from "../controller/cityCtrl";

export default class View {
    constructor(elements){
        this.elements = elements;
        this.model = new Model();
        this.controller = new Controller();
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
    render(newCityList){
        this.elements.cityList.innerHTML='';
        for(let city of newCityList){
            this.elements.cityList.appendChild
            (new Option(city,city))
        }
    }
}   