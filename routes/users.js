var express = require('express');
const fs=require("fs");
var router = express.Router();
const Users=require('../models/users');
//--------------------Paste serviceId,accountID and authToken below from readme file---------------

//paste here

//-------------------------------------------------------------
const client=require("twilio")(accountSID,authToken);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//----------------------------------------------Register Credentials----------------------------------
router.post('/register',(req,res,next)=>{
  const data={
    user_name:req.body.user_name,
    email:req.body.email,
    password:req.body.password,
    mobile_no:req.body.mobile_no
  }
  Users.findOne({email:req.body.email,password:req.body.password})
  .then(user=>{
    if(!user){  
      fs.appendFileSync('userdetails.txt',JSON.stringify(data));
      Users.create(data)
      .then(user=>{
        console.log(user);
        res.render('register',{status:"ok"});
        
      })
      .catch(err=>{
        console.log(err);
      })
    }
    else{
      res.render('register',{status:'already'});
    }
  })

})

router.post('/login',(req,res,next)=>{
  Users.findOne({email:req.body.email,password:req.body.password})
  .then(user=>{
    if(user){
    res.render('home',{data:user});
    }else{
      res.render('login',{status:'wrong'});
    }
  })
})


//------------------Login Credentials for OTP------------------------------------------------
router.post('/loginmobile',(req,res,next)=>{

  Users.findOne({mobile_no:req.body.mobile_no}).
  then(user=>{
    if(user){
        client
        .verify
        .services(serviceID)
        .verifications
        .create({
          to:`+91${req.body.mobile_no}`,
          channel:'sms'
        })
        .then(data=>{
          res.render('verify',{mobile:req.body.mobile_no,status:"ok"});
        })
        .catch(err=>{
          res.json(err);
        })
    }else{
      res.render('loginmobile',{status:'not exists'})
    }
  })
})
//------------------------------------Verification of mobile otp code----------------------------
router.post('/verify/:mobile',(req,res,next)=>{

  client
  .verify
  .services(serviceID)
  .verificationChecks
  .create({
    to:`+91${req.params.mobile}`,
    code:req.body.code
  })
  .then(data=>{
    Users.findOne({mobile_no:req.params.mobile})
    .then(user=>{ 
      if(data.status=="approved"){
        res.render('home',{data:user});
      }else{
        res.render('verify',{mobile:req.params.mobile,status:"wrong"})
      }
    })
    })
})
module.exports = router;
