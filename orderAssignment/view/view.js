import Controller from "../controller/mealCtrl";
import Model from "../model/mealOrder";
import DataStorage from "../storage/mealstorage"
export default class View{
    constructor(elements){
        this.elements = elements;
        this.model =  new Model();
        this.controller =  Controller;
        this.mealDetails=DataStorage; 
        
    }
    initialize(){
      
        // this.model.orderCopy.attach((meal,calorie,total)=>{
        
        //     this.renderOrderList(meal,calorie,total);
        // });
        // this.model.orderUpdate.attach((meal,calorie,total)=>{
        
        //     this.renderOrderList(meal,calorie,total);
        // });
        // this.model.orderDelete.attach((meal,calorie,total)=>{
        
        //     this.renderOrderList(meal,calorie,total);
        // });
        this.elements.addButton.addEventListener('click',(e)=>{
                if(this.elements.Meal.value!='' && this.elements.Calories.value>=0)
                {
                this.controller.addMeal(this.elements.Meal.value,this.elements.Calories.value);
                this.elements.Meal.value='';
                this.elements.Calories.value='';
                this.renderOrderList(this.mealDetails.getMeals());
                
            }    
        });
        this.elements.updateButton.addEventListener('click',(e)=>{
            this.controller.updateMeal(this.elements.Meal.value,this.elements.Calories.value);
            this.elements.Meal.value='';
            this.elements.Calories.value='';
            this.renderOrderList(this.mealDetails.getMeals());
          
    });
       this.elements.deleteButton.addEventListener('click',(e)=>{
        this.controller.removeMeal(this.elements.Meal.value,this.elements.calorie.value);
        this.elements.Meal.value='';
        this.elements.Calories.value='';
        this.renderOrderList(this.mealDetails.getMeals());
          
       });
        this.elements.clearButton.addEventListener('click',(e)=>{
        this.elements.tableRow.innerHTML="";
        this.elements.Meal.value="";
        this.elements.Calories.value="";
         });
     }
    renderOrderList(mealDetails){
        for(let i=0;i<=mealDetails.length;i++){
            
        let cap=document.getElementById('totalCap');
        let trow =document.createElement('tr');
        let data1 = document.createElement('td');
        let data2 = document.createElement('td');
     
        let data3 = document.createElement('td');
        let editButton = document.createElement('button');
        
        editButton.innerHTML='edit';
        editButton.type='Button';
        
        data3.appendChild(editButton);
        
        
        trow.appendChild(data1);
        trow.appendChild(data2);
        trow.appendChild(data3);
        
        this.elements.tableRow.appendChild(trow);
        console.log(this.elements.orderTable.rows.length);
        let mealOrder=JSON.parse(localStorage.getItem('meals'));
        let trIndex=this.elements.orderTable.rows.length;
        for( let trIndex  in mealOrder){
        data1.innerHTML=mealOrder[trIndex].meal;
        data2.innerHTML=mealOrder[trIndex].calorie;
      // cap.innerHTML=newTotal;
        }
        editButton.addEventListener('click',(e)=>{  
            this.elements.addButton.className+='displayNone';
            this.elements.updateButton.classList.remove('displayNone');
            this.elements.deleteButton.classList.remove('displayNone');
            this.elements.backButton.classList.remove('displayNone');
            editButton.disabled="true";
            this.elements.Meal.value=e.currentTarget.parentNode.parentNode.childNodes[0].innerHTML;
            this.elements.Calories.value=e.currentTarget.parentNode.parentNode.childNodes[1].innerHTML;
            this.elements.deleteButton.addEventListener('click',(d)=>{  
                cap.innerHTML-=this.elements.calorie.value;
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
               let mealOrder=JSON.parse(localStorage.getItem('meals'));
        let trIndex=this.elements.orderTable.rows.length;
        for( let trIndex  in mealOrder){
        mealOrder[trIndex].meal;
        data2.innerHTML=mealOrder[trIndex].calorie;
      // cap.innerHTML=newTotal;
        }
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
}
