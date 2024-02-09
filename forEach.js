let XMLHTTPRequest = require('xhr2');

let xhr =new XMLHTTPRequest();

xhr.open("GET",'https://restcountries.com/v3.1/all')

xhr.send();

xhr.onload =function(){
    let countries=JSON.parse(xhr.responseText);

    countries.forEach(value => {
        console.log(value.name,value.capital,value.flag);
    });
    
}
