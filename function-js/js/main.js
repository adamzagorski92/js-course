console.log("Funkcje- deklaracja, parametry, return");

const multiplyNumbers = function(number1=0, number2=0) {
let wynik=number1*number2;

return wynik;
}

let wynikMultiply = 0;

wynikMultiply = multiplyNumbers(2,4)

console.log(multiplyNumbers(5,7));
console.log(wynikMultiply);



/* 
// Deklaracja funkcji

function introduceMe() {
    console.log("Mam na imię Adam");
}

introduceMe();
introduceMe();
introduceMe();

// Wyrażenie funkcyjne

const writeMainName= function() {
    console.log("Moje imię to Adam")
}

writeMainName();
writeMainName();
writeMainName();
writeMainName();
writeMainName();

// Różnice między deklaracją funkcji, a wyrażeniem funkcyjnym
// # hoisting (istnieje w deklaracji funkcji) - można wywołać funkcję wcześniej, pomimo, że została zadeklarowana później w kodzie
// # w przypadku wyrażeń funkcyjnych nie można tego zrobić
// ??? dlaczego tak jest i czemu to służy?

// PARAMETRY FUNKCJI

function introduceOther(name = "Adam") {
    console.log(`Mam na imię ${name}`);
    console.log(`Miło Cię poznać ${name}`);
}

introduceOther("Monika");
introduceOther("Bartek");
introduceOther();

const sumNumbers = function(liczba1=0,liczba2=0) {
    let wynik = liczba1 + liczba2;
    console.log(wynik)
}

sumNumbers(2,3);

let adamsIndicator = 108;
let firstNumber = 1;
let secondNumber = 10;

sumNumbers(firstNumber,secondNumber);
sumNumbers(adamsIndicator, 20)

 */