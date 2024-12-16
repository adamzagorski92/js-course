console.log(
	'Arrow Functions'
);

// Stary zapis funkcji
/* const upSquare = function (x = 0) {
    return x * x;
}; */

// Nowy sposób zapisu tej samej funkcji - strzałkowy
// Dwie podstawowe funkcje, funkcji strzałkowych:
// 1. Skrócenie zapisu
// 2. Nie zmieniają kontekstu this (w kolejnych odcinkach)
// Idealnie nadają się do zwracania funkcji anonimowych

const upSquare = x => 
    x * x;

let result = upSquare(3);

console.log(result);

/* ['Krzysztof','Hans','Monika'].forEach(function (el) {
	console.log(el);
}); */


['Krzysztof','Hans',"Monika"].forEach( el => console.log(el));


