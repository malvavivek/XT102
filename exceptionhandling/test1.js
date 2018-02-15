const order = {email:'abc@xtz.com'}
try {
    //Reference Error
   // myFunction();
    //Type Error
   // null.myFunction();
   // eval('hello dfdf')
    //let name= order.name;
    if(!order.name)
    throw new SyntaxError('Order has no name')
    //console.log(order.name)
}

catch(e){
    console.log(e.message)
    console.log(e.name)
    console.log(e instanceof TypeError)
    console.log(e instanceof ReferenceError)
}

finally{
    console.log('inside Finally')
    console.log(typeof undefined)
}
console.log('hello')

