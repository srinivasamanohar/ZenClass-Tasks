class Circle{
    constructor(...args){
        [this.radius, this.color] = args;
    }
    getRadius()
    {
        return this.radius;
    }
    getColor()
    {
        return this.color;
    }
    setRadius(value)
    {
        this.radius = value;
    }
    setColor(value)
    {
        this.color = value;
    }
    toString()
    {
        return this.radius + " " + this.color;
    }
    getArea()
    {
        return Math.PI * 2 * this.radius;
    }
}

let mycircle = new Circle(15,"Red");
console.log(mycircle)
console.log("Radius:",mycircle.getRadius())
console.log("Set Radius:",mycircle.setRadius(10))
console.log("Color:",mycircle.getcolor())
console.log("Set Color:",mycircle.setColor("black"))
console.log("Area:",mycircle.getArea())
console.log("String:",mycircle.toString())
