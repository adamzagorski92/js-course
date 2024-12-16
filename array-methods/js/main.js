console.log("Array Methods")

let names =["Adam","Hania","Jacek"];
let namesJoined =["Adam","Hania","Jacek", "Franek"];
let namesReverse =["Adam","Hania","Jacek", "Franek"];
let namesSorted =["Adam","Hania","Jacek", "Franek"];
let menNames =["Robert", "Bartek", "Grzegorz"];
let menAge =[34, 23, 54];
let womanNames= new Array("Basia", "Asia", "Kasia");


/* Metoda push dodaje do tablicy nowy element oraz zwraca długość tablicy */
let arrayLength = names.push("Monika");

/* Metoda join słuzy do łączenia tablicy w jeden tekst */

let stringArray = namesJoined.join(" - ");

/* Metoda reverse służy do odwracania tablicy */
let arrayReverse = namesReverse.reverse();

/* Metoda sort sortuje elemnty tablicy */
let sortedArray = namesSorted.sort();

/* Metoda concat służy do łączenia tablic */

let concatArray = menNames.concat(menAge);
let concatTrippleArrays = menNames.concat(menAge,womanNames);

/* Metoda indexof zwraca indeks elementu tablicy */

let indexOfArray = names.indexOf("Adam");
let indexOfArrayWrongData = names.indexOf("Zygmunt");

/* Metoda map działa poprzez funkcję, która zwróci nam nowo utworzoną tablice poprzez modyfikację elementów */

let mappedArray = names.map(function(element, index) {
    let newElement = element.toUpperCase() +"-" + index;
    return newElement;
}) // Ta metoda często jest używana często w react

/* Metoda filter - przyjmuje funkcję, jesli przechodzi jakiś element filtr, to tworzona jest nowa tablica */

let filtredArray = names.filter(element => element.startsWith("A"));

console.log("Wyświetl zmienną names, która jest tablicą:",names);
console.log("Wyświetl zmienną arrayLength, która jest pushem do tablicy names:",arrayLength);
console.log("Wyświetl zmienną stringArray, która jest połączeniem danych z tablicy namesJoined:",stringArray);
console.log("Wyświetl zmienną arrayReverse, która jest odwróconą tablicą do namesReverse =[`Adam","Hania","Jacek", "Franek`]:",arrayReverse);
console.log("Sprawdź czy to samo stalo się z namesReverse",namesReverse === arrayReverse);
console.log(`Sprawdź jak wygląda tablica namesSorted =["Adam","Hania","Jacek", "Franek"] po sortowaniu:`, sortedArray);
console.log("Sprawdzam co otrzymam po połączeniu dwóch tablic: menNames i menAge", concatArray);
console.log("Tablica concatArray powinna być nowym obiektem, a więc przyrównując concatArray do menNames, a następnie do menAges powinienem otrzymać dwa razy false. Sprawdzam i wynik to:", concatArray==menNames, concatArray==menAge);
console.log("Wyświetlam tablicę stworzoną za momocą metody new array(): ",womanNames)
console.log("Wyświetlam tablicę połączoną z trzech innych tj: menNames, menAge oraz womanNames, a jej nazwa zmiennej to concatTrippleArrays  ",concatTrippleArrays)
console.log("names.indexOf(`Adam`) Powinno zwrócić indeks elementu `Adam` w tablicy names:", indexOfArray)
console.log("Jeśli nie ma w tablicy danego elementu to powinniśmy dostać wartość -1 Sprawdzam:", indexOfArrayWrongData)
console.log("Nowa zmapowana tablica o nazwie mappedArray", mappedArray)
console.log("Sprwadzenie czy wszystkie elementy przejdą przez filtr oraz wyświetlenie elementów, które spełnią warunek filtru, czyli elementy zaczynające się na dużą literę A: ",filtredArray);