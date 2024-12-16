console.log("while loop");

/* 

while (warunek) {
    ...instrukcje JS
}

*/


let pass = null;

while (pass !== "secret") {
    pass = prompt("Podaj hasło");
};

alert("Zalogowano! Zaraz zobaczysz treść strony");