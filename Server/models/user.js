const mongoose=require('mongoose');

var user=mongoose.model('user',{ //Employee - table name
    fullName:{type:String},
    email:{type:String},
    password:{type:String},
    favGenre:{type:String},
    phone:{type:Number}
});

module.exports=user;
