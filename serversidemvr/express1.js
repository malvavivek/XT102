const express=require('express');
const app=express()
app.get('/',(req,res)=>{    //if request is of "get" type then 'app' will handle it
    res.json({'id':1,"currentdate":new Date()
})
})
//http://localhost:3001/data/rajat/21
app.get('/data/:name/:age',(req,res)=>{    //if request is of "get" type then 'app' will handle it
    res.json({'id':req.params['name'],"age":req.params['age']
})
})
app.listen(3001,()=>console.log('server started on 3001'));