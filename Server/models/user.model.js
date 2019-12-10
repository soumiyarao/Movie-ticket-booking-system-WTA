//import { mongo } from 'mongoose';

const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
//const jwt=require('jsonwebtoken');

 var userSchema=new mongoose.Schema({
     fullName:{
         type: String,
         required: 'Full name can\'t be empty'
     },
     email: {
         type:String,
         required: 'Email can\'t be empty',
         unique: true
     },
     password:{
         type:String,
         required: 'Password can\'t be empty',
         minlength: [4,'Pasword must be atleast 4 characters long']
     }
 });
 
 //export default mongoose.model('User',userSchema);



/*
 //Events
 userSchema.pre('save',function(next){
     bcrypt.genSalt(10,(err,salt)=>{
         bcrypt.hash(this.password,salt,(err,hash)=>{
             this.password=password;
             this.saltSecret=salt;
             next();
         });
     });
 });

*/

 //custom validation for email
 userSchema.path('email').validate((val)=>{
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
},'Invalid e-mail.');


/*
//Methods
userSchema.methods.verifyPassword=function(password){
    return bcrypt.compareSync(password,this.password);
}
userSchema.methods.generateJWT=function(){
    return jwt.sign({_id:this._id});
}
*/
mongoose.model('User',userSchema);
