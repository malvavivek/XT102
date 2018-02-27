const add=(a,b)=>{
    setTimeout(()=>{ 
    for(let i=0;i<999999999;i++){}
    console.log(a+b);
    return a+b;
},1000)
}
//Call Stack
//add(3,3)
//setTimeout
//add(4,4)
//console.log(6)
//console.log(8)
const a=add(3,3);
const b=add(4,4);
const c=add(5,5);
// console.log(a);
// console.log(b);
// console.log(c);
