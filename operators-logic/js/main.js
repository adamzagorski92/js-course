console.log("Logic operators");

console.log((2>1)); //operator logiczny większości
console.log("not: ", !(2>1)); //operator negacji logicznej (not)

// && Operator iloczynu logicznego (and)

console.log("and (2>1)&&(30>10): ", (2>1)&&(30>10));
console.log("and (2>3)&&(30>10): ", (2>3)&&(30>10));
console.log("and (2>3)&&(30>40): ", (2>3)&&(30>40));

// || Operator sumy (or)

console.log((0>1)||(2>10));
console.log((2>1)||(11>10));