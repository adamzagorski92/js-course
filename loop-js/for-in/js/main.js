console.log("For in Loop");

/* 

let obiekt = {
    pole1: 'wartosc1';
    pole2: 'wartosc2';    
};

for (let nazwaPola in obiekt) {
    console.log(`${nazwaPola} --> ${obiekt[nazwaPola]}`);
}

*/

let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: '2020',
};

for(let key in car) {
    console.log(`Nazwa pola: ${key} --> Wartość pola: ${car[key]}`);
}