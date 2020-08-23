const path = require("path")

const express = require("express")

const app = express()

const geocode = require("./playground/geocoding/geofunction")

const forecast = require("./playground/forecast/forecast")



const hbs = require("hbs")

const templatepath = path.join(__dirname,'/template/views')

const partialspath = path.join(__dirname,"template/partials")


app.set('view engine','hbs')
app.set('views',templatepath)


const indexpath = path.join(__dirname,"../public")

hbs.registerPartials(partialspath)



app.get('/weather',(req,res)=>{
    res.render('weather',{
        name:"deepanshu"
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name:"about"
    })
})

app.get('/data',(req,res)=>{
if(!req.query.address){
    return res.send({
        error:"must provide an address"
    })
}

else{
    geocode(req.query.address,(error)=>{
        res.send({
            error:"not a valid address"})
    },(lat,long)=>{
    
        
        forecast(lat,long,(output)=>{
    
            res.send({
                result:output
            })
        })
        
    }) 
}
})


app.get('/docs',(req,res)=>{
    res.render('docs',{
        name:"deepanshu"
    })
})

app.use(express.static(indexpath))

app.get('/help',(req,res)=>{
    res.render('help',{
        name:'help page',
        message:"this is the help page find the helping details below"
    })
})

app.get('',(req,res)=>{
    res.render('index')
})

app.get('/help/*',(req,res)=>{
    res.render('404help')
})

// app.get('/products',(req,res)=>{
//     console.log(req.query.search)
//     res.send({
//         products:[]
//     })
// })


app.get('*',(req,res)=>{
    res.render('404',{name:'4040404040'})
})



// app.get('/json',(req,res)=>{
//     res.send({
//         name:"Deepanshu",
//         number:3
//     })
// })



app.listen(3000)


