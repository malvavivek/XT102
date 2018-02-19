
import View from "./view/orderview";

(function () {
    let view = new View({
        Meal:
            document.querySelector('#meal'),
        Calories:
            document.querySelector('#calorie'),
        addButton:
            document.getElementsByClassName('addBtn')[0],
        deleteButton:
            document.getElementsByClassName('deleteBtn')[0],
        backButton:
            document.getElementsByClassName('backBtn')[0],
        clearButton:
            document.getElementsByClassName('clrBtn')[0],
        updateButton:
            document.getElementsByClassName('updateBtn')[0],
        orderTable:
            document.querySelector('table')
    });
    view.initialize();
})();