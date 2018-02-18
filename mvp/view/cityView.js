import Model from "../model/city";

 class View{
    constructor(elements){
        this.elements=elements;
        
    }
}
export default new View({addBtn:
    document.querySelector('#addBtn'),
    removeBtn:
    document.querySelector('#removeBtn'),
    cityList:
    document.querySelector('#cityList')
});