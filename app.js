
const request = require('request')
const geocode=require('./utility/geocode')
const weather=require('./utility/weather')
 let address=process.argv[2];
if(address!=undefined)
{
  geocode(address,(error,data)=>{
    if(error)
    {
      return console.log(error)
    }
 
  weather(data.longitude,data.latitude,(error,forecastData)=>{
    if(error){
      return console.log(error)
    }
 
   console.log(data.location)
   console.log(forecastData) 
   })
 })
}
 else
 {
   console.log("please provide the address");
 }
