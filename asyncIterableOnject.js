const book2 = {
    name: "1984", 
    author: "George Orwell", 
    year: 1949,
    rating: 4.6, 
    genre: "Science Fiction", 
    movie: true

}

book2[Symbol.asyncIterator] = async function* (){
const entries = Object.entries(book2);
for (const entry of entries){
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(entry);
        }, 2000);
    });
}

};

const executeBook = async() =>{

    for await (const entry of book2){
        console.log(entry);
    }

};

const executeBook2 = async() =>{

    for await (const [key,value] of book2){
        console.log(`${key} => ${value}`);
    }

};

executeBook();
executeBook2();