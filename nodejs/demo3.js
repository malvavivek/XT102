const fs=require('fs');
const readData=(file)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(file,(err,data)=>{
            if(err){
                return reject (err);
            }
            const data1=data.toString().trim().split('\r\n')
            resolve(data1)
        })
    })   
}
readData('./file1').then((data)=>{
  
    const numbers=data.map(Number);
    const oddNumbers=numbers.filter(number=> number%2 ===1)
    console.log(oddNumbers)
   
}).catch((err)=>{
    console.log(err)
})

console.log('Im first');