console.log("continue loop");

// continue - przerywa aktualnie wykonywaną iterację pętli

let array = [1,4,23,32,43,23,2,323];

console.log("-------for--------");

for (let i=0; i<array.length; i++) {
    if (array[i]===32) {
        continue;
    }
    console.log(array[i]);
};

console.log("-------for of--------");

for (const element of array) {

    if (element===32) {
        continue;
    }
    console.log(element);
    
};


//continue tak jakby pomija element, który jest wskazany w isntrukcji

