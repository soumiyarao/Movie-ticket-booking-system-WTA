var express=require("express");
var app=express();
const cors = require('cors');
var nodemailer = require('nodemailer');
var QRCode = require('qrcode')
//var nodemailer = require('nodemailer');
//var otpGenerator = require('otp-generator');
var User=require('./models/user');
var fs=require("fs");
var bodyparser=require("body-parser");
const mongoose = require('mongoose');
app.use(cors({ origin: 'http://localhost:4200' }));
var parser=app.use(bodyparser.json());
const router=express.Router();
var dbo;
//var urlencodedparser=bodyparser.use.urlencoded({extended:false});
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var url1=new Array()
var data="hello"
var db1;
const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  'C:/Users/Lenovo/Desktop/Mini_wta/Client/index/src/assets/Uploads' });
var multiparty=require('multiparty')
MongoClient.connect(url, function(err, db) {
       if (err) throw err;
       db1=db;
    dbo = db.db("moviedb");
})   



app.post('/api/upload', multipartMiddleware, (req, res) => {
    console.log(req.body.test)
    res.json({
        'message': 'File uploaded succesfully.'
    });
});




// app.post('/api/upload', multipartMiddleware, (req, res) => {
//     console.log('file:',req.files);
//     fs.rename("C:/Users/Lenovo/Desktop/Mini_wta/Client/index/src/assets/Uploads/", "C:/Users/Lenovo/Desktop/Mini_wta/Client/index/src/assets/Uploads/", callback_function)
//     var EXT_RE = /(\.[_\-a-zA-Z0-9]{0,16}).*/g;
  
//     res.json({
//         'message': 'File uploaded succesfully.'
        

//     });
//     function callback_function(err){
//         console.log("error in file rename");
//     }
// });



function notify(mail,order,point){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'loyalshare.alerts@gmail.com',
               pass: 'loyalshare123'
           }
       });
       const mailOptions = {
        from: 'loyalshare.alerts@gmail.com', 
        to: mail, 
        subject: 'LoyalShare', 
        html: "<h2>You Have Ordered:"+order+"<br>Points Left:"+point+"<h2>"
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else {
          console.log("OTP sent to the respective Mail ID");
        }
    })
}
function notification(email,movname,date,time,seat){
    console.log("Mail",email,movname,date,time,seat)
    if(time=="aft"){
        time="12:00 pm"
    }
    if(time=="morn"){
        time="9:00 am"
    }
    if(time=="eve"){
        time="4:00 pm"
    }
    if(time=="night"){
        time="8:00 pm"
    }
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'loyalshare.alerts@gmail.com',
               pass: 'loyalshare123'
           }
       });
       const mailOptions = {
        from: 'loyalshare.alerts@gmail.com', 
        to: email, 
        subject: 'LoyalShare', 
        html: "<h2>Movie Name : " +movname+"<br>Date : "+date+"<br> Show Time : "+time+"<br>Seat Numbers : "+seat+"<h2>"
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else {
          console.log("OTP sent to the respective Mail ID");
        }
        var myquery = {email:email,check:false};
               
        var newvalues = { $set: {check:true} };
       dbo.collection("seat").updateOne(myquery, newvalues, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
         
         
        });
    })

   
    
}


// app.post('/send-email', async function (req, res) {
//   console.log("mail")
//     let img = await QRCode.toDataURL('data invoice untuk di kirim melalui email');
//     console.log("img",img)
//     let transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//     port: 465,
//     secure: true, 
//         service: 'gmail',
//         auth: {
//                user: 'loyalshare.alerts@gmail.com',
//                pass: 'loyalshare123'
//            }
//        });
//        const mailOptions = {
//         from: 'loyalshare.alerts@gmail.com', 
//         to: 'soumiya.rao.t@gmail.com', 
//         subject: 'LoyalShare', 
//         html: 'Halo ini barcodenya </br> <img src="' + img + '">'
//       };
    
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         //console.log('Message %s sent: %s', info.messageId, info.response);
//         res.render('index');
//     });
// });





app.get("/display",function(req,res){
    console.log("Inside displauy")
    
 

    dbo.collection("details").find({}).toArray(function(err,resp){
        console.log("query")
        //  console.log(resp[0].url);
          res.send(resp)
          
    })
    
})
app.post("/detail",function(req,res){
    console.log("cid",req.body.data);
    dbo.collection("details").find({}).toArray(function(err,resp){
        console.log("query1")
        for(var vars in resp){
           console.log("For",resp[vars])
            if((req.body.data==resp[vars].cid1) )
            {
                console.log(resp[vars]);
                res.send(resp[vars]);
                break;
            }
            
        }
          
          
          
    })
})
app.post("/seatentry",function(req,res){
    console.log("query3",req.body)
    dbo.collection("seat").insertOne({'email':req.body.email,'date':req.body.date,'time':req.body.time,'arr':req.body.arr,'mov':req.body.mov,'check':false});
    res.send({"status":"ok"})
})



app.post("/imgpoll",function(req,res){
    console.log("cid",req.body.data);
    dbo.collection("polls").find({}).toArray(function(err,resp){
        console.log("query1",resp)
        for(var vars in resp){
           console.log("For",resp[vars])
            if((req.body.data==resp[vars].cid2) )
            {
                console.log(resp[vars]);
                res.send(resp[vars]);
                break;
            }
            
        }
          
          
          
    })
})


app.post("/pollupdate",function(req,res){
    console.log("update",req.body.data,req.body.index)
    var myquery = {cid2:req.body.index};
               
    var newvalues = { $set: {poll:parseInt(req.body.data)} };
   dbo.collection("poll").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
     
     
    });
})


app.post("/pointupdate",function(req,res){
    console.log("update",req.body.email,req.body.point,req.body.order)
    var myquery = {email:req.body.email};
               
    var newvalues = { $set: {points:parseInt(req.body.point)} };
   dbo.collection("points").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
     notify(req.body.email,req.body.order,req.body.point);
     
    });
})






// app.post("/seatentry",function(req,res){
//     console.log("query3",req.body)
//     dbo.collection("seat").insertOne(req.body)
//     res.send({"status":"ok"})
// })

app.post("/seatget",function(req,res){
    console.log(req.body.date,req.body.time,req.body.mov);
    var arr=new Array();
    var j=0;
    dbo.collection("seat").find({}).toArray(function(err,resp){
        console.log("query1")
        for(var vars in resp){
           console.log("For",resp[vars])
            if((req.body.date==resp[vars].date && req.body.time==resp[vars].time && req.body.mov==resp[vars].mov) )
            {
                console.log(resp[vars]);
               for(var i=0;i<resp[vars].arr.length;i++){
                arr[j++]=resp[vars].arr[i];
                console.log(arr)
               }
                
            }
            
        }
        res.send({"arr":arr})
          
          
          
    })
    
})



app.post("/getprice",function(req,res){
    console.log("price",req.body.name)
    dbo.collection("details").findOne({cid1:req.body.name},(err,docs1)=>{
        console.log(docs1.price)
        res.send({'price':docs1.price})
    })

})



app.post("/payment",function(req,res){
    var arr;
    var date;
    var time;
    var id;
    var points=parseInt(req.body.name*(20/100));
    console.log(points)
    console.log("pay",req.body)
   
    dbo.collection("seat").findOne({email:req.body.email , check:false},(err,docs)=>{
        console.log("check",docs)
       arr=docs.arr;
       date=docs.date;
       time=docs.time;
       id=docs.mov;
       console.log("arr",arr,date,time,id)
       dbo.collection("movies").findOne({cid:docs.mov},(err,docs1)=>{
        console.log("resp mov",docs1.name)
       
       notification(req.body.email,docs1.name,date,time,arr)
    })
    })
     dbo.collection("points").findOne({'email':req.body.email},(err,docs2)=>{
         points=parseInt(points)+parseInt(docs2.points)
         console.log("point",points);
         var myquery = {email:req.body.email};
               
    var newvalues = { $set: {points:parseInt(points)} };
    dbo.collection("points").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
     
     
    });

    })
    
    
})




router.post('/api/login',(req,res)=>{
    console.log("Loginnnnnnnnnnnnnnnnnnnnnnnnnnn")
   // User.findOne({email:req.body.email},(err,docs)=>{
       dbo.collection("users").findOne({email:req.body.email},(err,docs)=>{
        console.log(docs)
    if(!err && docs!=null)
    {
         //res.json(docs);
         console.log(docs);
        if(req.body.password==docs.password)
        {
            console.log('yes!verified!');
            res.json('yes!')
           
        }
        else
        {
             res.json('invalid password');
             console.log('invalid password');
             
        }

    }
    else if(docs==null)
    {
        console.log('user not registered');
        res.json('user not registered');
        
    }
    
    });
});




// router.route('/api/register').post((req, res) => {
//    // User.findOne({email:req.body.email},(err,docs)=>{
//     dbo.collection("users").findOne({email:req.body.email},(err,docs)=>{
//         if(docs==null)
//         {
//             console.log('new user');
//            let user = new User(req.body);
          
//             user.save()
//                 .then(user => {
//                      res.status(200).json({'issue': 'Added successfully'});
//              })
//             .catch(err => {
//                 res.status(400).send('Failed to create new record');
//          });
//         dbo.collection("users").insertOne(user,function(err,resp){
//             dbo.collection("points").insertOne({'email':req.body.email,'points':0})
//             if(err){
//               console.log("error")
//             }
//             console.log("1 document inserted");
//             //res.send(resp); 
//             res.status(200).json({'issue': 'Added successfully'});
//         })
//         }
//         else
//         {
//             console.log('user already registered');
//             res.json('Email is already registered.');
//         }


//      });
    
// });




router.route('/api/register').post((req, res) => {
    mongoose.connect('mongodb://localhost:27017/moviedb');
    User.findOne({email:req.body.email},(err,docs)=>{
        if(docs==null)
        {
            console.log('new user');
            let user = new User(req.body);
            console.log('req:',req.body);
            user.save()
                .then(user => {
                    
                     res.status(200).json({'issue': 'Added successfully'});
             })
            .catch(err => {
                res.status(400).send('Failed to create new record');
         });
        }
        else
        {
            console.log('user already registered');
            res.json('Email is already registered.')
        }


    });
    
});

app.get("/img",function(req,res){
    console.log("imgggggggggggggg")
    
    var vars=0;
    dbo.collection("poll").find({}).toArray(function(err,resp){
       console.log(resp.length)
       for(var i=0;i<resp.length;i++){
        url1[vars++]=resp[i].url
        console.log("res",resp[i].url,i)
       }
       console.log("url",url1)
    })
    res.send({'url':url1});


})


app.post("/points",function(req,res){
    console.log("points",req.body.email)
    var points=0
    dbo.collection("points").findOne({email:req.body.email},(err,docs)=>{
    console.log("point",docs)
   
        if(docs!=undefined)
         points= parseInt(docs.points);
        else
        points=0;
    console.log("po",points)
    dbo.collection("users").findOne({email:req.body.email},(err,docs1)=>{
        console.log(docs1)
        console.log("name",docs1.fullName)
        res.send({'point':points,'name':docs1.fullName})
    })
    })
})  
app.get("/deletelastrow",function(req,res){
    var len
    dbo.collection("seat").find({}).toArray(function(err,resp){
     len=resp.length;
     console.log(len)
     dbo.collection("seat").deleteOne({"arr":resp[len-1].arr});
     res.send({"suc":"suc"});
    })

})




app.use('/',router);





//keerthana







var Movielist=require('./models/movielist');


//var ObjectId=require('mongoose').Types.ObjectId;
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";
//var database_name = "movielists"

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";







//function to send mail
function sendMailTo(email, subj, body){
    var transporter = nodemailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'loyalshare.alerts@gmail.com',
        pass: 'loyalshare123'
    }
    });

    var mailOptions = {
    from: 'loyalshare.alerts@gmail.com',
    to: email,
    subject: subj,
    text: body
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
}



// to display all movies
router.get('/movielists',(req,res)=>{
    console.log("hello in get movielists");
    //MongoClient.close();
    mongoose.connect('mongodb://localhost:27017/moviedb');
    
    Movielist.movielist.find((err,docs)=>{
     if(!err){
        //
        //console.log("doc:",docs);
         res.json(docs);
     }
     else{
         console.log(err)
         console.log('Error in retrieving Employees');
     }
    });
    //mongoose.connection.close()
});


router.route('/movielists/:id').get((req,res)=>{
    mongoose.connect('mongodb://localhost:27017/moviedb');
    
    Movielist.movielist.findById(req.params.id,(err,docs)=>{
        if(err)
            console.log(err);
        else
            res.json(docs);
           
    });
    
    //mongoose.connection.close()
});

app.get("/id",function(req,res){
    var id;
    
    dbo.collection("details").find({}).toArray(function(err,resp){
        console.log("id",resp.length)
        id=parseInt(resp.length)+1;
        console.log(id)
        res.send({'id':id})
    })
   
})

// router.route('/movielists/add').post((req,res)=>{
//     mongoose.connect('mongodb://localhost:27017/moviedb');
//     console.log("add",req.body.name)
//     let movie=new Movielist.movielist(req.body);
//     movie.save()
//         .then(movie=>{
//             res.status(200).json({'movie':'Added successfully'});
//             try{
//           //`  sendMailTo("keerthana.velilani@gmail.com", "New Movie", "Movie " + req.body.title + " has been released");
//             }
//             catch(err)
//             {
//                 console.log(err);
//             }
//         })
//         .catch(err=>{
//             res.status(400).send('Failed to create new record');
//             //console.log('failed to create record');
//         });
//        // mongoose.connection.close()

// });



router.route('/movielists/add').post((req,res)=>{
    let movie=new Movielist.movielist(req.body);
    movie.save()
        .then(movie=>{
            res.status(200).json({'movie':'Added successfully'});
            try
            {
                Movielist.users.find({favGenre:req.body.genre},(err,doc)=>{
                    if(!err)
                    {
                        doc.forEach(function(item) {
                            console.log(item)         // Here item shows the parameter
                            var itemObject = item.toObject();
                            console.log(itemObject.email); 
                            sendMailTo(itemObject.email, "New Movie", "Movie '" + req.body.name + "' from your favorite genre '"+req.body.genre+"' has been released.Be sure to check it out!");
                            // res.send('success sending mail');
                            console.log("success sending mail");
                                
                          })
                    }
                    else
                    {
                       // res.send('Error');
                       console.log("Error");
                    }

                });
            }
            catch(err)
            {
                console.log(err);
            }
            
        })
        .catch(err=>{
            res.status(400).send('Failed to create new record');
            //console.log('failed to create record');
        });
        Movielist.polls.find({name:req.body.name},(err,docs)=>{
            if(!err){
                docs.forEach(function(item) {
                    console.log("item add",item)
                Movielist.polls.deleteOne({'name':item.name},function(err,pollmovie){
                })
            })
            }
            else{
                console.log(err)
            }
        })

});





router.route('/movielists/update/:id').post((req,res)=>{
    mongoose.connect('mongodb://localhost:27017/moviedb');
    console.log("req",req.body.name)
    Movielist.movielist.findById(req.params.id,(err,movielists)=>{
        if(!movielists)
            return next(new Error('could not load document'));
        else
        {
            console.log("update",movielists)
            movielists.name=req.body.name;
            movielists.genre=req.body.genre
            movielists.language=req.body.language;
            console.log("updateafter",movielists)
            movielists.save().then(movielists=>{
                res.json('update done');
            }).catch(err=>{
                res.status(400).send('update failed');
            });
        }
    });
    //mongoose.connection.close()
});



router.route('/movielists/delete/:id').get((req,res)=>{
    mongoose.connect('mongodb://localhost:27017/moviedb');
    
    Movielist.movielist.findById(req.params.id, function(err1, movie)
                   {
                        console.log('movie:',movie);
                        if (err1) 
                        {
                            console.log('error retrieving record from movielists to delete:',err1);
                        }
                        else if(movie!=null)
                        {
                            var query = {"name":movie.name, "genre":movie.genre, "language":movie.language}
                            let m=new Movielist.archive(query);
                            m.save()
                                .then(m=>{
                                    res.status(200).json({'movie':'Added successfully'});
                                })
                                .catch(err=>{
                                    res.status(400).send('Failed to create new record');
                                });

                            Movielist.movielist.findByIdAndRemove({_id:req.params.id} , function(err2, res2)
                            {
                                    if (err2) 
                                    {
                                        console.log('error deleting record from movielists:',err2);
                                    }
                                    if(res2!=null)
                                    {
                                        console.log("successful: ",res2);
                                        res.json({"Status":"Successful"});
                                    }
                                    else
                                    {
                                        console.log('didnt remove: ',res2);
                                    }
                            });

                            
                        }
                    });
                   // mongoose.connection.close()
});

router.route('/movielists/deletePoll/:name').get((req,res)=>{
    mongoose.connect('mongodb://localhost:27017/moviedb');
    Movielist.polls.deleteOne({'name':req.params.name},function(err,pollmovie){
        if(err)
        {
            res.send(err);
        }
        else{
            res.send({'success':'success'});
        }


    });

});


//poll for movies greater than threshold of 5
router.get('/pollsdelete',(req,res)=>{
    mongoose.connect('mongodb://localhost:27017/moviedb');
    console.log('inside poll');
    var flag=false;
    Movielist.polls.find({"poll":{$gt:5}},(err,docss)=>{
        console.log("docss",docss)
        for(var vars in docss){
            console.log(docss[vars].name)
            Movielist.movielist.find({"name":docss[vars].name},(err,doc)=>{
                console.log("doc",doc)
                if(doc[vars]!=undefined){
                    console.log("if",doc[vars].name)
                    Movielist.polls.deleteOne({'name':doc[vars].name},function(err,pollmovie){
                        res.send({"Success":"suc"}) 
                    })
                    
                }
                else{
                    res.send({"Success":"suc"}) 
                }
               
            })
        }
      
       
    })
   
})


     
               
router.get("/polls",(req,res)=>{
    Movielist.polls.find({"poll":{$gt:5}},(err,docs)=>{
        console.log(docs);
     if(!err){

         res.json(docs);
     }
     else{
         console.log('Error in retrieving users');
     }
    });
   })           
        
    

       
    


router.get('/archives',(req,res)=>{
    mongoose.connect('mongodb://localhost:27017/moviedb');
    
    Movielist.archive.find((err,docs)=>{
     if(!err){
         res.json(docs);
     }
     else{
         console.log('Error in retrieving users');
     }
    });
    //mongoose.connection.close()
});

router.get('/users',(req,res)=>{
    mongoose.connect('mongodb://localhost:27017/moviedb');
    
    Movielist.users.find((err,docs)=>{
     if(!err){
         res.json(docs);
     }
     else{
         console.log('Error in retrieving users');
     }
    });
   // mongoose.connection.close()
});


app.listen(3000);