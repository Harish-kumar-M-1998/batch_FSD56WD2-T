class person {
        constructor()
        {
this.name ="noname"
this.age = ''
        }

getDetails(){
        console.log(this.name,this.age)
}}

let person1 = new person();
let person2 = new person();

person1.name='harish'
person1.age=25;

person2.name='dhanush'
person2.age=26;

person1.getDetails();
person2.getDetails();
