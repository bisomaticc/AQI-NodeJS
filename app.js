var express = require('express')
var bodyparser= require("body-parser")
var app=express()
var expressLayouts = require('express-ejs-layouts')

require("dotenv").config()

app.use(expressLayouts)
app.set('view engine','ejs')

function loc(req,res){
    const successCallback = (position) => {
        console.log(position);
      };
      
      const errorCallback = (error) => {
        console.log(error);
      };
      
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

}

// var apikey=`${process.env.API_KEY}`;
var API_KEY=''
app.get('/',function(req,res){
    loc()
    let lat=26.944617
    let lon=76.185207
    let url=`https://api.waqi.info/feed/here/?token=${API_KEY}`
     
 
 if(error){
    console.log('Unable to connect to server')
 }
else{
    console.log('PM 2.5 is currently '+response.body.list.components.pm2_5)
}
   })

app.get('/tile',(req,res)=>{
    let url=`https://tiles.aqicn.org/tiles/{usepa-pm25}/{z}/{x}/{y}.png`

})
app.get('/aqi',(req,res)=>{
    res.render('ab')
})
 
const PORT= process.env.PORT || 5000;
app.listen(PORT,console.log('Server running on $(PORT)'))