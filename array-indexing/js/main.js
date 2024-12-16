console.log("Indeksowanie tablic");

/* Tablice indeksowane są od 0. */

let names= ["Adam", "Hania", "Jacek"];


names[1]= "Basia";
names[2]= "Marek";

/* Destrukturyzacja danych w tablicy */
let [developerName, secretaryName, graficName] = names;

console.log(names);
console.log("Możemy wskazać na kolejny element np names[0] to:",names[0]);
console.log("Jakie imię zostało wpisane pod developerName:", developerName);
console.log("Jakie imię zostało wpisane pod secretaryName:", secretaryName);
console.log("Jakie imię zostało wpisane pod graficName:", graficName);