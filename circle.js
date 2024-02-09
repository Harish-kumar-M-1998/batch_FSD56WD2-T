class Circle {
    constructor(radius,color){
        this.radius=radius;
        this.color=color
    }
    getRadius(){
        console.log(this.radius)
    }
    setRadius(radius){
        console.log(this.radius=radius)

    }
    getColor(){
        console.log(this.color)
    }
    setColor(color){
        console.log(this.color=color)

    }
    toString(){
        console.log(('[radius :'+this.radius+ ' '+'color :'+this.color+']'));
    }
    getArea(){
        const pi =Math.PI;
        let area = pi*this.radius*this.radius;
        console.log(area);
    }
    getCircumference(){
        const pi = Math.PI;
        let circumference = 2*pi*this.radius;
        console.log(circumference)
    }
}
let circle1 =new Circle(1.0,"red")
circle1.getRadius()
circle1.setRadius(5.0)
circle1.getColor()
circle1.setColor('blue')
circle1.getArea()
circle1.getCircumference()
circle1.toString()
