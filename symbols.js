const sym1 = Symbol("dog");
const sym2 = Symbol("dog");
console.log('sym1 and sym2 are the same?');
console.log(sym1 === sym2);

const sym3 = Symbol.for('cat');
const sym4 = Symbol.for('cat');

console.log('sym3 and sym4 are the same?');
console.log(sym3 === sym4);


const RED = Symbol('red');
const ORANGE = Symbol('orange');
const YELLOW = Symbol('yellow');
const BLUE = Symbol('blue');
const cat = 'blue';

function getThratLevel(color) {

    switch (color) {
        case RED:
            return 'severe';
            
        case ORANGE:
            return 'high';

        case YELLOW:
            return 'elevated';
        
        case BLUE:
            return 'low';
    
        default:
            console.log('I dont know that color!');
    }
    
}

getThratLevel(cat);


// Use Symbols to store matadata
const length = Symbol('length');

class Train{

    constructor() {
        this[length] = 0;
    }

    add(car, contents){
        this[car]=contents;
        this[length]++;
    }

}

let freightTrain = new Train();
freightTrain.add('flank car', 'aircraft parts');
freightTrain.add('tank car', 'milk');
freightTrain.add('hopper car','coal');

for(car in freightTrain){
    console.log(car, freightTrain[car]);
    console.log(car);
    console.log(freightTrain[car]);
}

console.log(YELLOW.toString());

//------------- use symbols as keys for objects

const Character = {

    name: "Rick",
    class: "Axe Wider",
    quote: "I will never let you down",
    [Symbol('admin')]:false,
    [Symbol('age')] : 50,
    ['vego'+ (5+3)]:'wynik',

    // we can use for... of loop to iterate over Symbol values. Objects are not iterable, Symbols are
   [Symbol.iterator]: function* (){
        yield 1;
        yield 2;
        yield "hello";
    }    
    

}

for (const key of Object.keys(Character)) {
    console.log(key);
}

const digits = [0, 1, 2, 3, 4, 5, 6, 4, 8, 44];

for (const index of digits) {
  console.log(index);
}

//show object;s symbols
console.log(Object.getOwnPropertySymbols(Character));
//generator function *
for (const value of Character) {
    console.log(value);
}


console.log(...Character);

