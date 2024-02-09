let XMLHTTPRequest = require('xhr2');

let xhr =new XMLHTTPRequest();

xhr.open("GET",'https://restcountries.com/v3.1/all')

xhr.send();

xhr.onload =function(){
    let countries=JSON.parse(xhr.responseText);

    let population=countries.reduce((pre,curr)=>{
        return pre+curr.population
    },0)
    console.log("Total population of all countries :",population);
}
