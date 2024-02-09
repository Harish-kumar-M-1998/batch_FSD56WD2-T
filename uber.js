function uberPrice_innova(km) {
    let price_for_1km = 10;
    let price = km * price_for_1km;
    return (`The price for ${km} km`, price)
}
function uberPrice_Etios(km) {
    let price_for_1km = 5;
    let price = km * price_for_1km;
    return (`The price for ${km} km`, price)
}
class Uber {

    constructor() {
        this.name = 'uber'
        this.vehicle = ""
    }
    innova() {
        console.log('Service', ':', this.name)
        console.log('Vehicle name', ':', this.vehicle)
        let a=uberPrice_innova(5);
        console.log(a);
    }
    etios() {
        console.log('Service', ':', this.name)
        console.log('Vehicle name', ':', this.vehicle)
       let b= uberPrice_Etios(5);
       console.log(b);
    }
}
let uber1 = new Uber();
uber1.vehicle = 'Innova'
let uber2 = new Uber();
uber2.vehicle = 'Etios'
uber1.innova();
uber2.etios();