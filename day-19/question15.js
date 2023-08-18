// 15. Filter an array of book objects, keeping only the books with a rating greater than 4
let books = [
    { title: 'The Great Gatsby', rating: 2.7 },
    { title: 'To Kill a Mockingbird', rating: 4.5 },
    { title: 'Pride and Prejudice', rating: 4.8 },
    { title: 'Animal Farm', rating: 3.6 }
  ];
let newBooks=books.filter((elem)=>{
    return elem.rating>4;
});
console.log(newBooks)