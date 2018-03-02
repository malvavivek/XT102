const mongoose=require('mongoose');
let Schema=mongoose.Schema;
let playerSchema=new Schema({
    "name":'String',
    "age":'Number',
    "playerType":'String'
})
module.exports=mongoose.model('Player',playerSchema);