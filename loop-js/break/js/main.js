console.log("break loop");

// break - przerywa aktualnie wykonywaną pętlę

let array = [1,4,23,32,43,23,2,323];

console.log("-------for--------");

for (let i=0; i<array.length; i++) {
    if (array[i]===32) {
        break;
    }
    console.log(array[i]);
};

console.log("-------for of--------");

for (const element of array) {

    if (element===32) {
        break;
    }
    console.log(element);
    
};


