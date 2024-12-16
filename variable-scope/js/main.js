console.log("Variable scope");

myName= "Marek";
console.log(`Czy wyświetlni się po zmianie imienia, które jest deklarowane później w kodzie? Let's check. The changed name is: ${myName}`);

var myName = "Adam";
console.log(`Korzystam z hoistingu i wyświetlam: ${myName}`);


// ZA POMOCĄ LET NIE ZADZIAŁA HOISTING ! ! ! Poniższy kod wywali błąd właśnie przez sposób deklaracji zmiennej.
/* 
console.log(`Czy za pomocą let też to zadziała? Da bum: ${myNameHoistLet}`);
let myNameHoistLet = "Franek";
console.log(`Korzystam z hoistingu i wyświetlam: ${myNameHoistLet}`);

 */

// Czy dla czytelności kodu nie lepiej stosować inne zmienne w nazewnictwie w funkcjach oraz w funkcjach globalnych, aby nie myliły programisty i poprawiały czytelność? 

function displayName() {
    var myName = "Monika";
    var myNameIn = "Zygmunt"
    var mySurname= "Kowalski"; // zmienna lokalna - dostęp jest tylko w     miejscu między nawiasami (w funkcji)
    console.log(myName);
    console.log(mySurname);

    if (myNameIn="Zygmunt") {
        var ageIn =32;
        console.log(myNameIn);
        console.log(ageIn);
    }
console.log(ageIn);
}

displayName();

if (myName="Adam") {
    var age =30;
    console.log(age)
} // zmienne deklarowane w pętlach, warunkach mają zakres funkcyjny, a więc można z nich korzystać tak jak by były globalne

/* console.log(mySurname); */ // to nie zadziała, bo nie mam dostępu do zmienniej mySurname zadeklarowanej w funkcji.

console.log(myName);
console.log(age);
/* console.log(ageIn);  */// To nie zadziała, bo zmienna jest zadeklarowana wewnąrz funkcji

console.log("DEKLARACJA ZA POMOCĄ 'let'");

var myNameLet = "Adam";
function displayNameLet() {
    var myNameLet = "Monika";
    var myNameInLet = "Zygmunt"
    var mySurnameLet= "Kowalski";
    console.log(myNameLet);
    console.log(mySurnameLet);

    if (myNameInLet="Zygmunt") {
        let ageInLet =32;
        console.log(myNameInLet);
        console.log(ageInLet);
    }
/* console.log(ageInLet); */ // dlatego to nie działa, ponieważ zmienne deklarowane za pomocą słowa kluczowego "let" mają zasięg blokowy, a zmienne deklarowane za pomocą słowa kluczowego "var" mają zasięg globalny (chyba, że są umieszczone w funkcji, to wtedy mają zasięg lokalny - w obrębie danej funkcji)
}
displayNameLet();
if (myNameLet="Adam") {
    let ageLet =30;
    console.log(ageLet)
}
console.log(myNameLet);
/* console.log(ageLet); */ // to samo tutaj. "let" nie pozwoli zyskać dostępu do zmiennej ageLet ponieważ let ogranicza swój zasięg do bloku.