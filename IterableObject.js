//Thanks to Symbol.iterator we can make Object to be iterable

const book = {
    name: "1984", 
    author: "George Orwell", 
    year: 1949,
    rating: 4.6, 
    genre: "Science Fiction", 
    movie: true

}

//making Object book iterable
//Objects are not iterable.
book[Symbol.iterator] = function * () {

    const entries = Object.entries(book);
    for (const entry of entries) {
        yield entry;
    }

};

for(const entry of book){
    console.log(entry);
}

for(const [key, value] of book){
    console.log(`${key} => ${value}`);
    if(value == 1984){
        var xxx = value;
    }
}
console.log(xxx);