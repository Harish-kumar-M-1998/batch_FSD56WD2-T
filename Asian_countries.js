let XMLHTTPRequest = require('xhr2');

let xhr =new XMLHTTPRequest();

xhr.open("GET",'https://restcountries.com/v3.1/all')

xhr.send();

xhr.onload =function(){
    let countries=JSON.parse(xhr.responseText);

    let asia =countries.filter((value)=>{
        if(value.region==='Asia'){
            console.log(value.name)
        }
    })
    
}





