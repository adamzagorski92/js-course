console.log("Class - definition and  create object");

//ES5

function PersonES5(nameES5, lastNameES5) {
    this.nameES5= nameES5;
    this.lastNameES5= lastNameES5;
    this.printInfoES5=function() {
        console.log("Imię: " + this.nameES5 + "Nazwisko:" + this.lastNameES5);
    }
};

let personES5 = new PersonES5("Adam", "Kowalski");
console.log(personES5);
personES5.printInfoES5();

let secondPersonES5 = new PersonES5("Monika", "Nowak");
secondPersonES5.printInfoES5();

let thirdPersonES5 = new PersonES5("John", "Smith");
thirdPersonES5.printInfoES5();



// ES6
class Person {
    constructor(name, lastName) {
        this.name= name;
        this.lastName= lastName;
    }

    printInfo() {
        console.log(`Imię: ${this.name}, Nazwisko: ${this.lastName}`);
    }
};

let person = new Person("Adam", "Kowalski");
console.log(person);
person.printInfo();

let secondPerson = new Person("Monika", "Nowak");
secondPerson.printInfo();

let thirdPerson = new Person("John", "Smith");
thirdPerson.printInfo();



