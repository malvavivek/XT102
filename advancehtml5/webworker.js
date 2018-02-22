let i=100;
let intervalId=0;
let response={"message":"","Root":0};
let taskHandler=function(e){
    if(e.data === 'start'){
        try{
            intervalId=setInterval(()=>{
                response.Root=Math.sqrt(i);
                postMessage(JSON.stringify(response));
                i++;
            },10);
        }
        catch(e){
        clearInterval(intervalId);
        postMessage(e.message);
        }
    }
    else if(e.data==='pause'){
        clearInterval(intervalId);
    }
}
addEventListener('message',taskHandler,false);