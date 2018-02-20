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
        
            this.renderOrderList(meal,calories,total);
        });
        this.model.orderUpdate.attach((meal,calories,total)=>{
        
            this.renderOrderList(meal,calories,total);
        });
        this.model.orderDelete.attach((meal,calories,total)=>{
        
            this.renderOrderList(meal,calories,total);
        });
        this.elements.addButton.addEventListener('click',(e)=>{
                if(this.elements.Meal.value!='' && this.elements.Calories.value>=0)
                {
                this.controller.copy(this.elements.Meal.value,this.elements.Calories.value);
                this.elements.Meal.value='';
                this.elements.Calories.value='';
            }    
        });
        this.elements.updateButton.addEventListener('click',(e)=>{
            this.controller.update(this.elements.Meal.value,this.elements.Calories.value);
            this.elements.Meal.value='';
            this.elements.Calories.value='';
          
    });
       this.elements.deleteButton.addEventListener('click',(e)=>{
        this.controller.delete(this.elements.Meal.value,this.elements.Calories.value);
        this.elements.Meal.value='';
        this.elements.Calories.value='';
          
       });
        this.elements.clearButton.addEventListener('click',(e)=>{
        this.elements.tableRow.innerHTML="";
        this.elements.Meal.value="";
        this.elements.Calories.value="";
         });
    }
    renderOrderList(newMeal,newCalories,newTotal){
        let cap=document.getElementById('totalCap');
        let trow =document.createElement('tr');
        let data1 = document.createElement('td');
        let data2 = document.createElement('td');
     
        let data3 = document.createElement('td');
        let editButton = document.createElement('button');
        
        editButton.innerHTML='edit';
        editButton.type='Button';
        
        data3.appendChild(editButton);
        data1.innerHTML=newMeal;
        data2.innerHTML=newCalories;
        trow.appendChild(data1);
        trow.appendChild(data2);
        trow.appendChild(data3);
        
        this.elements.tableRow.appendChild(trow);
       
        cap.innerHTML=newTotal;
        editButton.addEventListener('click',(e)=>{  
            this.elements.addButton.className+='displayNone';
            this.elements.updateButton.classList.remove('displayNone');
            this.elements.deleteButton.classList.remove('displayNone');
            this.elements.backButton.classList.remove('displayNone');
            editButton.disabled="true";
            this.elements.Meal.value=e.currentTarget.parentNode.parentNode.childNodes[0].innerHTML;
            this.elements.Calories.value=e.currentTarget.parentNode.parentNode.childNodes[1].innerHTML;
            this.elements.deleteButton.addEventListener('click',(d)=>{  
                cap.innerHTML-=this.elements.Calories.value;
                this.elements.Meal.value='';
                this.elements.Calories.value='';
                e.target.parentNode.parentNode.remove();
                this.elements.addButton.classList.add('displayBlock');
                this.elements.updateButton.classList.add('displayNone');
                this.elements.deleteButton.classList.add('displayNone');
                this.elements.backButton.classList.add('displayNone');
               

            });
            this.elements.updateButton.addEventListener('click',(f)=>{
               let cap1=cap.innerHTML-parseInt(e.target.parentNode.parentNode.childNodes[1].innerHTML);
               
                 e.target.parentNode.parentNode.childNodes[0].innerHTML=this.elements.Meal.value;
                 e.target.parentNode.parentNode.childNodes[1].innerHTML=this.elements.Calories.value;
                 cap.innerHTML=cap1+parseInt(e.target.parentNode.parentNode.childNodes[1].innerHTML);
            });
        });
        this.elements.backButton.addEventListener('click',(e)=>{  
            this.elements.addButton.classList.add('displayBlock');
            this.elements.updateButton.classList.add('displayNone');
            this.elements.deleteButton.classList.add('displayNone');
            this.elements.backButton.classList.add('displayNone');
            

        });
        
        
        
    }
}
