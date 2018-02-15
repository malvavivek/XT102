
import Presenter from "./presenter/cityPresenter";
//import obj from './util/multimodule'
import Mod1,* as obj from './util/multimodule'
(function(){
    let presenter=new Presenter();
    presenter.initialize();
   // console.log(obj.mod1()+ " "+obj.mod2()+ " "+obj.mod3());
    console.log(new Mod1()+ " "+new obj.Mod2()+ " "+new obj.Mod3()+ " ")

}());

