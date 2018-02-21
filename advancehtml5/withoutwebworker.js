(function(){
let intervalId,rt;
let running=false;
let i=100;
let result=document.querySelector('#result')
document.querySelector('#start')
.addEventListener('click',()=>{
    running=true;
    while(running){
        rt=Math.sqrt(i);
        result.appendChild
        (document.createTextNode(rt))
        i++;
    }
})

document.querySelector('#stop')
.addEventListener('click',()=>{
    running=false;
    document.querySelector('#msg')
    .appendChild(document.createTextNode
        ('stopped'))
});

})();