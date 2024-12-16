console.log("Conditional instructions: if, else if, else");

/* 

if (warunek1) {
    ... instrukcja JavaScript, gdy został spełniony `warunek1`
} else if {
    ...instrukcje JavaScript, gdy spełniony `warunek2`
} else if {
    ...instrukcje JavaScript, gdy spełniony `warunek3`
} else {
    ...instrucje JavaScript, w kazdym innym przypadku niż powyższe
 }

*/

let pizzaPrice=35;

if(pizzaPrice<20) {
    console.log("Pizza jest tania!");
} else if((pizzaPrice>=20) && (pizzaPrice<25)) {
    console.log("Pizza jest w dobrej cenie!");
} else if (((pizzaPrice>=25)&&(pizzaPrice<30))) {
    console.log("Pizza jest droga!");
} else {
    console.log("Pizza jest bardzo droga!");
}