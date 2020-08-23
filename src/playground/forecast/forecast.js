const axios = require("axios")

const forecast = (lat,long,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=f3edafe989ce786a8c2ae42d3dc0573e&query=' + lat + "," + long
    axios.get(url).then(function(response){
    const city = response.data.location.name;
    const country = response.data.location.country;
    const region = response.data.location.region;

    const temp = response.data.current.temperature
    const humidity = response.data.current.humidity
    const desc = response.data.current.weather_descriptions[0]
    const precipitation = response.data.current.precip;
    const wind= response.data.current.wind_speed;
    const cloud = response.data.current.cloudcover;
    const is_day = response.data.current.is_day;
    
    const output = {
        city:city,
        country:country,
        region:region,
        temp:temp,
        humidity:humidity,
        desc:desc,
        precipitation:precipitation,
        wind:wind,
        cloud:cloud,
        is_day:is_day
    }
        
    


    

    callback(output)
    })

}

module.exports = forecast