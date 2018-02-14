import Controller from "./controller/cityCtrl";
import model from "./model/city";
import View from "./view/cityview";

(function(){
    let model = new Model();
    let view = new View({addBtn:
    document.querySelector('#addBtn'),
    removeBtn:
    document.querySelector('#removeBtn'),
    cityList:
    document.querySelector('#cityList')
})
    let controller = new Controller();
    view.initialize();

}());