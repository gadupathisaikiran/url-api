const express=require("express")
const shortUrl = require("node-url-shortener");

const app=express()

app.get("/",async(req,res)=>{

   let urlparam=req.query.url

   try{
    shortUrl.short(urlparam, function (err, url) {
if(err){
   res.send(err)
}


      if(url=="https://cdpt.in/rh"||!url){

      res.send("<h1>enter your url in query params</h1>")
      }
     else{
      res.send(`<h1>YOUR SHOTER URL=${"    "} ${url}</h1>`)
     }
   
   
    });
       
    }
   catch{
    
   console.log(e)


   }



})





app.listen(5000,()=>{console.log("listening in 5000 port")})
