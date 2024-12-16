console.log("do while loop");

/* 

do {
    ...instrukcja JS
} while (warunek)

*/

let isLoggedIn = true; 

do  {
    pass = prompt("Podaj hasło");
    if(pass==="secret") {
        isLoggedIn =true;
    };
} while (!isLoggedIn);

alert("Zalogowano :) zaraz zobaczysz treść strony");