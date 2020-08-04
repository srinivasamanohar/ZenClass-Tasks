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

let circle = new Circle(15,"Green");
console.log(circle)
console.log("Radius:",circle.getRadius())
console.log("Set Radius:",circle.setRadius(8))
console.log("Color:",circle.getcolor())
console.log("Set Color:",circle.setColor("blue"))
console.log("Area:",circle.getArea())
console.log("String:",circle.toString())
