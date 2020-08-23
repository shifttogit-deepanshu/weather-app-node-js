

const formselect = document.querySelector("form")
const input = document.querySelector("input")

formselect.addEventListener("submit",(event)=>{
    event.preventDefault()
   if(!input.value){
       console.log("no value submitted")
   }
   else{
       const url = "http://localhost:3000/data?address=" + input.value
       fetch(url).then((response)=>{
           response.json().then((data)=>{
            if(data.error){
                console.log("error:" + data.error)
            }
            else{
                document.querySelector(".city").innerHTML=data.result.city
                document.querySelector(".region").innerHTML=data.result.region
                document.querySelector(".count").innerHTML=data.result.country
                document.querySelector(".temp-js").innerHTML=data.result.temp

                document.querySelector(".precip-js").innerHTML=data.result.precipitation

                document.querySelector(".wind-js").innerHTML=data.result.wind

                document.querySelector(".humid-js").innerHTML=data.result.humidity


                document.querySelector(".cloud-js").innerHTML=data.result.cloud

                document.querySelector(".desc-js").innerHTML=data.result.desc

                if(data.result.is_day=="no"){
                    document.querySelector(".day-js").innerHTML="NIGHT"
                    document.querySelector(".toggler").setAttribute("class","toggler fas fa-cloud-moon")

                    // <i class="fas fa-cloud-moon"></i>
                }
                else if(data.result.is_day=="yes"){
                    document.querySelector(".day-js").innerHTML="DAY"
                    document.querySelector(".toggler").setAttribute("class","toggler fas fa-cloud-sun")
                }


            }
           })
       })
   }
})

