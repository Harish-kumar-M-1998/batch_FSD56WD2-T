let XMLHTTPRequest = require('xhr2');

let xhr =new XMLHTTPRequest();

xhr.open("GET",'https://restcountries.com/v3.1/all')

xhr.send();

xhr.onload =function(){
    let countries=JSON.parse(xhr.responseText);

    let population=countries.filter((value)=>{
        if(value.population < 200000){
            return value.population
        }
         //return value.name(population<200000);
        
    }).map((value)=> value.name)
    console.log(population);
}
