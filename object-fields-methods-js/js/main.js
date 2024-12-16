console.log("object - fields and objects");

// Zmienna która przechowuje nas obiekt nazywa się INSTANCJĄ
// obiekty zawsze definuje się w nawiasach klamrowych,
// pola obiektu tworzy się następująco: nazwa: wartość,
// obiekty mogą zawierać funkcje
// do pól obiektu można odwoływać się w sposób tablicowy
var person = {
    name: "Adam",
    height: 180,
    print: function() {
        console.log("Mam na imię: " + this.name, "oraz mam: " + this.height + " cm wzrostu");
    },
    printThis: function() {
        console.log("Jestem metodą obiektu `printThis` i zaraz uruchomię wewnętrzną metodę `print` ");
        this.print();
    }
};

let {name, height} =person;

console.log("After let declaration the name is:"+ name);


console.log(person.name);
console.log(person.height);
person.print();
console.log("Mam " + person["height"] + " cm wzrostu"); //Odwołanie tablicowe
person["print"]();
person.printThis();
person.height = 181;
person.weight= 75;

console.log(person);


var woman = {
    nameWoman: "Monika",
    heightWoman: 165
}

let {nameWoman,heightWoman} = woman;

console.log(woman.nameWoman);
console.log(woman.heightWoman);
console.log(woman);
console.log(nameWoman);
console.log(heightWoman);
