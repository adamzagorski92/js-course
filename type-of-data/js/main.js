console.log("Type of Data - simply type");

/* Typy proste */

/* ######## Variable ########### */

/* Numbers */
let firstNumber = 108;
let secondNumber = 100;

/* Strings */
let mainName = "Adam";
let mainSecondName = `Janek`;

/* Boolean */
let iAmDeveloper = false;

/* Get object */
let mainHeading = document.getElementById("mainHeading");

let object=null; // Najczęściej, gdy chcemy wyzerować zmienną  dla dalszej częsci kodu lub chcemy działać na pobranym obiekcie i chcemy go wyzerować

/* Przykad z literówką w ID */
let mainHeadingIssue = document.getElementById("maiHeading");
console.log("To jest przykład z literówką:" + " " + mainHeadingIssue);
/* Koniec przykładu z literówką w ID */

let undefinedType; // BARDZO WAŻNE! Gdy definujesz zmienną, staraj się ją zainicjalizować! 

let variableSymbol = Symbol();

/* ######## End-of-Variable ########### */


/* ######## constants ########### */


const symbol = Symbol();

const person = {
    name: "Adam",
    occupation: "Developer",
    [symbol]: "Tajne hasło",
}

variableSymbol = Symbol();
person[variableSymbol] = "Zamienne tajne hasło - update";

const symbols = Object.getOwnPropertySymbols(person);

/* ######## end-of-constants ########### */

if(iAmDeveloper) {
    console.log(mainName + " " + "jest programistą");
} else {
    console.log(mainName + " " + "nie jest programistą");
}

for (let sym of symbols) {
    console.log(person[sym]);
}

console.log(firstNumber+secondNumber);
console.log(mainName + " "+ mainSecondName);
console.log(mainHeading);
console.log(undefinedType);
console.log(person);
console.log(person[symbol]); // tutaj próbuję dostać się do symboli

/* Typy referencyjne */

console.log("OD TEGO MIEJSCA KOD DOTYCZY TYPÓW REFERENCYJNYCH")

// To nie są referencyjne typy danych, ale dodałem do nich w nazwie "Ref" ponieważ dotyczy to tematu danych referencyjnych

let numberRef =108;
let secondNumberRef = numberRef;

secondNumberRef = 200;

console.log("numberRef:",numberRef);
console.log("secondNumberRef:",secondNumberRef);

//tablice

let tableRef =[1,2,3];
let secondTableRef = tableRef; //to ustawia wskaźnik, a nie dane

secondTableRef[2]= 108;
tableRef[0]= 24;

console.log("Zawartość tablicy tableRef:", tableRef)
console.log("Zawartość tablicy secondTableRef:", secondTableRef);

let personRef = {
    name: "Adam",
    age: 25,
};

let secondPersonRef = personRef;

secondPersonRef.age = 20;

console.log("Zawartość obiektu secondPersonRef:", secondPersonRef);
console.log("Zawartość obiektu personRef:", personRef);

console.log("Sprawdzanie jakiego typu danych jest jakaś zmienna")

console.log("Typ danej numberRef:", typeof numberRef);
console.log("Typ danej secondNumberRef:", typeof secondNumberRef);
console.log("Typ danej tableRef:", typeof tableRef);
console.log("Typ danej secondTableRef:", typeof secondTableRef);
console.log("Typ danej personRef:", typeof personRef);
console.log("Typ danej secondPersonRef:", typeof secondPersonRef);

console.log("Czy zmienna jest instancją danego typu?")

let isArray = secondTableRef instanceof Array;
let isArraySecond = personRef instanceof Array;

console.log("Czy secondTableRef jest instancją tablicy?: ",isArray);
console.log("Czy personRef jest instancją tablicy?: ",isArraySecond);
console.log("Typ danej isArray:", typeof isArray);




/* 
Podsumowując:
# Mamy dwa typy danych:
    1. Proste,
    2. Referencyjne
### AD 1 ###
Typy proste to:
    - liczba,
    - tekst,
    - prawda/fałsz,
    - symbol
Używając tych danych możemy je nadpisywać (chyba, że są stałe), i możemy ich używać bez konieczności wskazywania na, któryś z kolei argument danej zmiennej, ponieważ jak sama nazwa wskazuje, te zmienne są proste, a więc będą miały jeden argument

### AD 2 ###
Typy referencyjne to:
    - tablice,
    - obiekty,
Używając tych zmiennych oraz stałych przekazujemy dalej tak jakby wskaźnik. Możemy za pomocą tego wskaźnika wskazać element, który trzeba zmienić w danej tablicy lub obiekcie i następnie go zmienić. Ważne jest jednak to, że w odróżnieniu do zmiennych typu prostego, tutaj zmiana zachodzi we wskazanej tablicy lub obiekcie w całym kodzie, a nie tak jak to w przypadku zmiennych prostych - zmiana następuje po linijce wprowadzającej zmianę (+ ewentualnie hoisting)
*/