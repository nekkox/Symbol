const movie =  {
    name: "Blade Runner", 
    director: "Ridley Scott",
    year: 1982, 
    rating: 89, 
    genre: "Science Fiction",
    [Symbol("budget")]: 30,
    [Symbol("boxOffice")]: 41.6,

}

//showing keys of the object
for (const entry of Object.entries(movie)){
    console.log(entry);
}

for(const [key,value] of Object.entries(movie)){
    console.log(`${key} => ${value}`);
}

for (const key of Object.keys(movie)){
    console.log('key: ' + key);
}

console.log(Object.entries(movie)[0][1]=='Blade Runner');

//showing symbols of the movie
console.log(Object.getOwnPropertySymbols(movie));


const symbols = Object.getOwnPropertySymbols(movie);
const budget = movie[symbols[0]];

console.log('value of budget Symbol: ' + budget);
console.log(symbols);
symbols.forEach((symbol) => {
    console.log(symbol, movie[symbol]);
});

