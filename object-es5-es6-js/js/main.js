console.log("Differences in standards");


//ES5
var person = {
    name: "Adam",
    height: 180,
    print: function() {
        console.log("Mam na imię: " + this.name);
    },
    printThis: function() {
        console.log("Jestem metodą obiektu `printThis` i zaraz uruchomie wewnętrzną metodę `print`");
        this.print();
    }
};

person.printThis();

//ES6

let personES6 = {
    name: "Adam",
    height: 180,
    print() {
        console.log("Mam na imię: " + this.name);
    },
    printThis() {
        console.log("Jestem metodą obiektu `printThis` i zaraz uruchomie wewnętrzną metodę `print`");
        this.print();
    }
};

personES6.printThis();