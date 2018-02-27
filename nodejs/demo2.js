const fs=require('fs');
const readData=(file,cb)=>{
    fs.readFile(file,(err,data)=>{
        if(err){
            return cb(err);
        }
        const data1=data.toString().trim().split('\r\n')
        cb(null,data1)
    })
}

readData('./file1',(err,data)=>{
    if(err)
    throw err;
    // data.forEach((item)=>{
    //     if(item%2 !=0){
           
    //         console.log(item)
    //     }
    // })
    const numbers=data.map(Number);
    const oddNumbers=numbers.filter(number=> number%2 ===1)
    console.log(oddNumbers)
    // console.log(data);
})
console.log('Im first')