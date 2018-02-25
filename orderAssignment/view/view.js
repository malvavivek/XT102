import Controller from "../controller/mealCtrl";
import Model from "../model/mealOrder";
import DataStorage from "../storage/mealstorage"
export default class View{
    constructor(elements){
        this.elements = elements;
        //this.model =  new Model();
        this.total=0;
        this.controller =  Controller;
        this.mealDetails=DataStorage; 
        this.targetId;
    }
    initialize(){
      
        this.mealDetails.orderAdd.attach((newMeal)=>{
        
            this.renderOrderList(newMeal);
        });
        this.mealDetails.orderUpdate.attach((newMeal)=>{
        
            this.renderOrderList(newMeal);
        });
        this.mealDetails.orderDelete.attach((newMeal)=>{
        
            this.renderOrderList(newMeal);
        });
        this.elements.addButton.addEventListener('click',(e)=>{
                if(this.elements.Meal.value!='' && this.elements.Calories.value>=0)
                {
                    debugger;
                this.controller.addMeal(this.elements.Meal.value,this.elements.Calories.value);
                this.elements.Meal.value='';
                this.elements.Calories.value='';
              //  this.renderOrderList(this.mealDetails.getMeals());
                
            }    
        });
        this.elements.updateButton.addEventListener('click',()=>{
            debugger;
            this.controller.updateMeal(parseInt(this.targetId),this.elements.Meal.value,this.elements.Calories.value);
            // this.elements.Meal.value='';
            // this.elements.Calories.value='';
           
          
    });
       this.elements.deleteButton.addEventListener('click',(e)=>{
        this.controller.removeMeal(parseInt(this.targetId));
        this.elements.Meal.value='';
        this.elements.Calories.value='';
        //this.renderOrderList(this.mealDetails.getMeals());
        this.elements.addButton.classList.add('displayBlock');
        this.elements.updateButton.classList.add('displayNone');
        this.elements.deleteButton.classList.add('displayNone');
        this.elements.backButton.classList.add('displayNone');
          
       });
        this.elements.clearButton.addEventListener('click',(e)=>{
        this.elements.tableRow.innerHTML="";
       // this.elements.totalCal='';
        this.elements.Meal.value="";
        this.elements.Calories.value="";
        this.elements.addButton.classList.add('displayBlock');
        this.elements.updateButton.classList.add('displayNone');
        this.elements.deleteButton.classList.add('displayNone');
        this.elements.backButton.classList.add('displayNone');
        this.controller.clearAll();
         });
     }
    renderOrderList(newmealDetails){
        this.total = 0;
        this.elements.tableRow.innerHTML = "";
        if(newmealDetails.length == 0){
            this.elements.Meal.value = "";
            this.elements.Calories.value = "";
            this.elements.orderTable.innerHTML = "";
             this.total = 0;
             this.elements.totalCal.innerHTML = this.total;
        }
        newmealDetails.forEach((item)=>{
        // let mealOrder=JSON.parse(localStorage.getItem('meals'));  
      //  let cap=document.getElementById('totalCap');
        let trow =document.createElement('tr');
        let data1 = document.createElement('td');
        let data2 = document.createElement('td');
     
        let data3 = document.createElement('td');
        let editButton = document.createElement('button');
        
        editButton.innerHTML='edit';
        editButton.type='Button';
        editButton.setAttribute('id',item.id);
        data1.innerHTML=item.meal;
        data2.innerHTML=item.calorie;
        data3.appendChild(editButton);
        trow.appendChild(data1);
        trow.appendChild(data2);
        trow.appendChild(data3);
        this.total = this.total + parseInt(item.calorie);
            this.elements.totalCal.innerHTML = this.total;
        this.elements.tableRow.appendChild(trow);
        // console.log(this.elements.orderTable.rows.length);
        
    //     let trIndex=this.elements.orderTable.rows.length;
    //     for( let trIndex  in mealOrder){
    //     // data1.innerHTML=mealOrder[trIndex].meal;
    //     // data2.innerHTML=mealOrder[trIndex].calorie;
       
    //   // cap.innerHTML=newTotal;
    //     }
    // this.elements.deleteButton.addEventListener('click',(d)=>{  
    //     // cap.innerHTML-=this.elements.calorie.value;
    //     // this.elements.Meal.value='';
    //     // this.elements.Calories.value='';
    //     // e.target.parentNode.parentNode.remove();
    //     this.controller.removeMeal(this.targetId);
    //     this.elements.addButton.classList.add('displayBlock');
    //     this.elements.updateButton.classList.add('displayNone');
    //     this.elements.deleteButton.classList.add('displayNone');
    //     this.elements.backButton.classList.add('displayNone');
       

    // });
        editButton.addEventListener('click',(e)=>{  
            debugger;
            this.targetId=e.currentTarget.id;
          
            this.elements.addButton.classList.remove('displayBlock')
            this.elements.addButton.className+='displayNone';
            this.elements.updateButton.classList.remove('displayNone');
            this.elements.deleteButton.classList.remove('displayNone');
            this.elements.backButton.classList.remove('displayNone');
            editButton.disabled="true";
            //  this.elements.Meal.value=e.currentTarget.parentNode.parentNode.childNodes[0].innerHTML;
            //  this.elements.Calories.value=e.currentTarget.parentNode.parentNode.childNodes[1].innerHTML;
            this.elements.Meal.value=item.meal;
            this.elements.Calories.value=item.calorie;
            
            // this.elements.Meal.value=mealOrder.meal;
            // this.elements.Calories.value=mealOrder.calorie;
           
    //         this.elements.updateButton.addEventListener('click',(f)=>{
    //             debugger;
    //            let cap1=cap.innerHTML-parseInt(e.target.parentNode.parentNode.childNodes[1].innerHTML);
    //          //  let mealOrder=JSON.parse(localStorage.getItem('meals'));
    // //     let trIndex=this.elements.orderTable.rows.length;
    // //     for( let trIndex  in mealOrder){
    // //     mealOrder[trIndex].meal;
    // //     data2.innerHTML=mealOrder[trIndex].calorie;
    // //   // cap.innerHTML=newTotal;
    // //     }
    //              e.target.parentNode.parentNode.childNodes[0].innerHTML=item.meal;
    //              e.target.parentNode.parentNode.childNodes[1].innerHTML=item.calorie;
    //              cap.innerHTML=cap1+parseInt(e.target.parentNode.parentNode.childNodes[1].innerHTML);
    //              this.controller.updateMeal(this.targetId,this.elements.Meal.value,this.elements.Calories.value);
    //         });
          
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
