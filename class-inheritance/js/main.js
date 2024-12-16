console.log("Inheritance in ES6 standard");

class Line {
    constructor(length = 0) {
        this.length=length;
    }
    setLength(length=0) {
        this.length=length;
    }
}

let firstLine = new Line(108);
firstLine.setLength(110); // tutaj możnaby wsadzić inputa od użytkownika

console.log(firstLine);

class Rectangle extends Line {
    constructor(width=0, length=0) {
        super(length); //wywołuje konstruktor klasy, z której dziedziczymy
        this.width=width;
    }
    setWidth(width=0) {
        this.width=width;
    }
}

class Cuboid extends Rectangle {
    constructor(height=0, width=0, length=0) {
        super(width,length);
        this.height=height;
    }
    setHeight(height=0) {
        this.height=height;
    }
}



let firstRectangle = new Rectangle(10,20);
firstRectangle.setWidth(100);
firstRectangle.setLength(200);
console.log(firstRectangle);

let firstCuboid = new Cuboid(100,200,300);
firstCuboid.setHeight(20);
firstCuboid.setWidth(40);
firstCuboid.setLength(70);
console.log(firstCuboid);
