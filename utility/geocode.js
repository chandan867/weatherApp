const request = require('request')
const geocode=(address,callback)=>{
 const geo='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoiY2hhbmRhbjUyMTIiLCJhIjoiY2tsNHV6d2RnMHhwcTJ3bW44NGkzZmQ3MCJ9.ueFyxJJotWFrCMxinhy_EQ&limit=1';

  request({url:geo,json:true},(error,response)=>{
    if(error)
    callback("not connected to internet",undefined)
    else if(response.body.features.length==0)
    callback("please enter valid location",undefined)
    else
    callback(undefined,{
      latitude: response.body.features[0].center[1],
      longitude: response.body.features[0].center[0],
      location: response.body.features[0].place_name
  })
  })
}

 

 module.exports=geocode