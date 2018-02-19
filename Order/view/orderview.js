import Controller from "../controller/ordercontroller";
import Model from "../model/order";
export default class View{
    constructor(elements){
        this.elements = elements;
        this.model = Model;
        this.controller = new Controller();
         
    }
    initialize(){
       
        this.model.orderCopy.attach((meal,calories,total)=>{
            debugger;
            this.renderOrderList(meal,calories,total);
        });
        this.elements.addButton.addEventListener('click',(e)=>{
            if(this.elements.Meal.value!="" && this.elements.Calories.value !=""){
                this.controller.copy(this.elements.Meal.value,this.elements.Calories.value);
            }
            
           
        });
    }
    renderOrderList(newMeal,newCalories,newTotal){
        debugger;
        // let orderTable =document.getElementsByClassName('table')[0];
        let cap=document.getElementById('totalCap');
        let trow =document.createElement('tr');
        let data1 = document.createElement('td');
        let data2 = document.createElement('td');
        let data3 = document.createElement('td');
        let editbutton = document.createElement('button');
        
        editbutton.innerHTML='edit';
        data3.appendChild(editbutton);
        data1.innerHTML=newMeal;
        data2.innerHTML=newCalories;
        trow.appendChild(data1);
        trow.appendChild(data2);
        trow.appendChild(data3);
        
        this.elements.orderTable.appendChild(trow);
       
        cap.innerHTML=newTotal;
       // data3.innerHTML = editbutton;
        
    }
}
