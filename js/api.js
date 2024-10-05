//const apiUrl = 'https://appapi.planetsmartcity.in/api/v3/version';
const outputElement = document.getElementById('output');
const mybutton = document.getElementById("mybutton");
/*mybutton.onclick = function(){
    fetch(apiUrl)
    .then(response =>{
        if(!response.ok){
            throw new Error('There is something error')
        }
       
        return response.json();
    })
    .then(data =>{
        console.log(data);
        outputElement.innerHTML = `Manadatory Update value is ${data.data.mandatory_update}
                                      <br>Version is  ${data.data.version}
                                      <br>minimum stable version is ${data.data.minimum_stable_version}
                                      `;
    })
    

}*/

const apiKey = '79f308d96f851dc56f8f5988dedef638';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=8.5204&lon=73.8567&appid='+apiKey

fetch(apiUrl)
.then(response =>{
   if(!response.ok){
    throw new Error("Weather Api is not working");
   } 
   return response.json();
})
.then(data=>{
    console.log(data);
        //outputElement.innerHTML =JSON.stringify(data, null, 2);
        let weather = data.weather[0];
        outputElement.innerHTML =  `Id=${weather.id}
        description= ${weather.description}
        `
                                     
});

 