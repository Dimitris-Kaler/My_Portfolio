var express = require('express');
var router = express.Router();
var projectsArray = require("../services/projectServices")
const nodemailer=require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const fs=require("fs")
const config = require("dotenv").config()


//render the page
router.get("/",function(req,res){

  res.render("index",{title:"My Portfolio",heroName:"Dimitris Kalerantes",projects:projectsArray,cv:"DimitrisKalerantesCV.pdf",msg:req.flash("msg")})

})


//Download PDF
router.get("/downloadPDF",(req,res)=>{
  var file=fs.createReadStream('./public/CV/DimitrisKalerantesCV.pdf')
  var stat=fs.statSync('./public/CV/DimitrisKalerantesCV.pdf')
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=DimitrisKalerantesCV.pdf');
  file.pipe(res);
})





//EMAIL
const auth={
  auth:{
    api_key:process.env.API_KEY,
    domain:process.env.DOMAIN
  },

  host : "https://dkalerantes.herokuapp.com/"
}


router.post('/',async function(req,res){
  console.log(process.env.PORT)
  console.log(req.body.email)
  const transporter=nodemailer.createTransport(mg(auth))

  const output=`
<p>You have a new contact request</p>
<img class="email" src="cid:email" alt="email-image">
<h3>Contact details</h3>
<ul>
<li>FirstName: ${req.body.name}</li>
<li>Email: ${req.body.email}</li>
<li>Message: ${req.body.message}</li>
</ul>`



const mailOptions={
  from:`${req.body.name} <${req.body.email}>`,
  to:"kal.dev@hotmail.com",
  html:output
}
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});


await transporter.sendMail(mailOptions,function(err,data){
  if(!err){
   req.flash('msg', 'Thank you! Your message has been successfully sent.I will contact you very soon!')
   return res.redirect("/#contact")
    }else{
      console.log(err)
    res.status(500)
    res.send("something get wrong")
  }
})
})









module.exports = router;
