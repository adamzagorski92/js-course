console.log("Loop: for..of");

/* 

let array =[1,2,3];

for (let variable of array) {
    ...instrukcja JS
}

*/

let arrStudents = ['Ania', 'Kasia', 'Marta', 'Paulina'];

for(let element of arrStudents) {

    console.log(element);
}

// ta pętla zawsze przeleci po wszystkich elementach

let name= 'Akademia 108';

for (let element2 of name) {
    console.log(element2);
} // dla strungów iteruje po literkach, czyli wyświetlą się po kolei wszystkie literki i w tym spacja.

console.log("Ilość znaków zes spacjami: "+name.length);
console.log("Ilość znaków bez spacji: "+name.replace(/\s/g, "").length);
console.log("Ilość wyrazów: "+name.trim().split(/\s+/).length);