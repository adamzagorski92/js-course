console.log("Inheritance in ES5 Standard");

/* ES5 standard */

/* Linia */

function Line(length=0) {
    this.length=length;
}

Line.prototype.setLength=function(length=0) {
    this.length=length;
}

/* Prostokąt */

function Rectangle(length=0, width=0) {
    Line.call(this,length);
    this.width=width;
}
// zanim będzie obiekt dziedziczył, to należy stworzyć nowy obiekt, który jest przypisany do tego po którym dziedziczy - mój Boże xD.
Rectangle.prototype= Object.create(Line.prototype); 
Rectangle.prototype.contructor = Rectangle;

Rectangle.prototype.setWidth = function(width=0) {
    this.width=width;
}

/* Prostopadłościan */

/* Krok 1: Deklaracja nowej klasy wraz z warunkiem dziedziczenia  */
function Cuboid(height=0, length=0, width=0) {
    Rectangle.call(this,length,width);
    this.height=height;
}

/* Tworzenie klasy, która tworzy połączenie (dziedzictwo - hierarchia dziedziczenia) między klasami
Słowo "Object" jest zarezerowowane do tworzenia tego połączenia
*/
Cuboid.prototype= Object.create(Rectangle.prototype);
Cuboid.prototype.contructor = Cuboid;

Cuboid.prototype.setHeight = function(height=0) {
    this.height=height;
}

let firstCuboid = new Cuboid(100,200,300);
firstCuboid.setHeight(20);
firstCuboid.setLength(30);
firstCuboid.setWidth(60);
console.log(firstCuboid);

let firstRectangle = new Rectangle(10,20);
console.log(firstRectangle);

var firstLine = new Line(10);
firstLine.setLength(100);
console.log(firstLine);