const axios = require("axios")


const geocode = (address,callback2,callback)=>{
    const http1url= "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiZGVlcGFuc2h1MTM0MSIsImEiOiJja2RydDhsZXgwOHkxMnFyb2k0eG1tOTNqIn0.SVbtr3m85nVEZ8Q5djLT6g"

    axios.get(http1url).then((response)=>{
        
        const long = response.data.features[0].center[0]
        const lat = response.data.features[0].center[1]

        

        callback(lat,long)
    }).catch((error)=>{
        callback2(error)
    })


}

module.exports = geocode