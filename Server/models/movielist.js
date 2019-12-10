
const mongoose=require('mongoose');

/*
const schema =mongoose.Schema;

let movielist=new Schema({

    title:{
        type:String
    },
    genre:{
        type:String
    },
    language:{
        type:String
    }

});

//export default mongoose.model('movielist',movielist);

*/

var movielist=mongoose.model('details',{ //Employee - table name

    cid1:{type:Number},
    image:{type:String},
    video:{type:String},
    synopsis:{type:String},
    genre:{type:String},
    rating:{type:Number},
    language:{type:String},
    duration:{type:String},
    name:{type:String},
    price:{type:Number}

});

var users=mongoose.model('users',{

    fullName:{type:String},
    email:{type:String},
    password:{type:String},

});

var archive=mongoose.model('archives',{

    name:{type:String},
    cid1:{type:Number},
    image:{type:String},
    video:{type:String},
    synopsis:{type:String},
    genre:{type:String},
    rating:{type:Number},
    language:{type:String},
    duration:{type:String},
    price:{type:Number}

});

var polls=mongoose.model('polls',{
    cid2:{type:Number},
    name:{type:String},
    poll:{type:Number},
    url:{type:String}, 
});





/*
module.exports={
movielist : movielist(),
users:users()
}
*/
module.exports={movielist,users,archive,polls};




