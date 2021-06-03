const request = require('request')
const weather=(longitude,latitude,callback)=>{
    const url='http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&units=metric&appid=a1b7e205c565b0c79bf0a8905641df4c'
    request({url:url,json:true},(error,response)=>{
      if(error)
      callback('no internet',undefined)
      else if(response.body.cod==400)
      {
        callback(response.body.message,undefined)
        // console.log(longitude)
        // console.log(latitude)
      }
      
      else
      callback(undefined,{
         temperature:response.body.main.temp,
        description:response.body.weather[0].description
  
      })
  
    })
  }
 


  module.exports=weather


