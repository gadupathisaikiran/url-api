const express=require("express")
const shortUrl = require("node-url-shortener");

const app=express()

app.get("/",async(req,res)=>{

   try{
    shortUrl.short("https://docs.google.com/forms/d/e/1FAIpQLScgQ_mWibgC0MVg04iSEckI4j-dIUCZQqEVwzduw1C9SvpoYA/viewform", function (err, url) {
        
    res.send(url)
    });
       
    }
   catch{

   console.log(e)


   }



})





app.listen(5000,()=>{console.log("listening in 5000 port")})