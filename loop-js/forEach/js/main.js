console.log("forEach loop");

/* 

let array =[1,2,3];

array.forEach(function(element, index) {
    ...instrukcje JavaScript
});

*/

let arrStudents = ['Ania', 'Hania', 'Patrycja', 'Malwina'];

arrStudents.forEach(function(element, index){
    console.log("wartość elementu tablicy: ", element,"-->", "index to: ", index);
    console.log(`Element z indeksem: ${index} ma wartość: ${element}`); // ten zapis jest prostszy
});


function arrIteration(element,index) {
    console.log(`II sposób--> Element z indeksem: ${index} ma wartość: ${element}`);
};

arrStudents.forEach(arrIteration);