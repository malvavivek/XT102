import Model from "../model/city";
import View from '../view/cityView'
export default class Presenter{
    constructor(){
        this.model=Model;
        this.view=View;
    }

    initialize(){
        this.model.cityAdded.attach((cityList)=>{
            this.render(cityList)
        })
        this.model.cityRemoved.attach((cityList)=>{
            this.render(cityList)
        })

this.view.elements.addBtn.addEventListener('click',()=>{
    let newCity=prompt('Enter a New City');
    if(newCity){
        this.model.add(newCity)
    }
})
this.view.elements.removeBtn.addEventListener('click',()=>{
    let index=
    this.view.elements.cityList.options.selectedIndex;
    if(index!=-1){
        this.model.remove(index);
    }
})

    }
    render(newCityList){
        this.view.elements.cityList.innerHTML='';
        for(let city of newCityList){
    this.view.elements.cityList.appendChild
    (new Option(city,city))
        }
    }
    

}