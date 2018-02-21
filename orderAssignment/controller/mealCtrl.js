import DataStorage from '../storage/mealstorage'
import Model from '../model/mealOrder'

 class MealController{
    constructor(){
        this.items=DataStorage.getMeals();
        this.currentMeal=null;
        this.totalCalories=0;

    }
addMeal(name,calorie){
        let ID;
        if(this.items.length>0){
            ID=this.items[this.items.length-1].id+1;
        }else{
            ID=0;
        }
        let newMeal=new Model(ID,name,calorie);
        this.items.push(newMeal);
        DataStorage.storeMeal(newMeal);
        return newMeal;
    }

    getMealById(id){
        let found=null;
        this.items.forEach((item)=>{
if(item.id === id){
    found=item;
}
        });
        return found;
}
    updateMeal(id,name,calorie){


this.items.forEach((item)=>{
    if(item.id === id){
        item.meal=name;
        item.calorie=calorie;
        DataStorage.updateMeal(item);
    
    }

});
      
        //return newMeal;
    }

    removeMeal(id){
        this.items.forEach((item)=>{
            if(item.id === id){
                DataStorage.removeMeal(item);
            }

    })
}
}
export default new MealController();