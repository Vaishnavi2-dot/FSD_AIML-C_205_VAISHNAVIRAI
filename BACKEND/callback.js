//without callback
// function getBook(){
//     setTimeout(()=>{
//         return "Math Book";
//     },2000);
// }
// let book = getBook();
// console.log(book); //undefined print hoga kyunki getBook function ke andar setTimeout ke through book return ho raha hai, aur setTimeout asynchronous hai, isliye getBook function apna execution complete karne ke baad hi book return karega, lekin console.log(book) usse pehle execute ho jayega, isliye undefined print hoga. EVENTHANDLER 2sec wait nahi karega






// function getBook(callback){
//     setTimeout(()=>{
//         callback("Math Book");
//     },2000);
// }
// getBook(function(book1){
//     console.log(book1);
// });
//callback function ek function hota hai jo dusre function ke andar argument ke roop mein pass kiya jata hai, aur jab wo dusra function apna kaam complete kar leta hai, tab callback function ko call karta hai. Isse asynchronous code ko handle karne mein madad milti hai, jaise ki setTimeout ke case mein. Jab setTimeout apna kaam complete kar leta hai, tab wo callback function ko call karta hai, jisme book1 argument ke roop mein "Math Book" pass hota hai, aur phir console.log(book1) execute hota hai, jisse "Math Book" print hota hai.





//callback hell example

// function getPublisher(book,callback){
//     setTimeout(()=>{
//         callback("Publisher: ABC Publications");
//     },2000);
// }
// function getAuthor(book, callback){
//     setTimeout(()=>{
//         callback("Author: Firstname Lastname");
//     },2000);
// }
// function getBook(callback){
//     setTimeout(()=>{
//         callback("Math Book");
//     },2000);
// }

// getBook(function(book){
//     console.log(book);
//     getAuthor(book,function(author){
//         console.log(author);
//         getPublisher(author,function(publisher){
//             console.log(publisher);
//         })
//     })
// })

//Is code mein humne getBook function ke andar getAuthor function call kiya hai, aur getAuthor function ke andar getPublisher function call kiya hai. Isse code ka structure nested ho jata hai, jise callback hell kehte hai. Callback hell se bachne ke liye hum PROMISES ya ASYNC/AWAIT ka use kar sakte hai, jisse code zyada readable aur maintainable ban jata hai.

//PROMISES
//Functions return Promises

function getBook() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Math Book");
    }, 2000);
  });
}

function getAuthor(book) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Author of " + book + " is John Doe");
    }, 2000);
  });
}

function getPublisher(author) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Publisher of " + author + " is ABC Publishing");
    }, 2000);
  });
}

// Step 2: Promise chaining (NO callback hell)

getBook()
  .then((book) => {
    console.log(book);
    return getAuthor(book);
  })
  .then((author) => {
    console.log(author);
    return getPublisher(author);
  })
  .then((publisher) => {
    console.log(publisher);
  })
  .catch((error) => {
    console.log("Error:", error);
  }).finally(() => {
    console.log("All operations completed");
  });
