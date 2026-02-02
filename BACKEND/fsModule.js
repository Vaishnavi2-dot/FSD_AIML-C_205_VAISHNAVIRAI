const fs = require('fs');

// Example of Non-Blocking Code (Asynchronous) -->

// Create a new file
// fs.readFile('data.txt',"utf8", (err,data) => {
//     if (err) {
//         console.log('Error reading file:', "utf8",err.message);
//         return;
//     }
//     console.log('File content ', data);
// });
// console.log("requests 2d data from file");
// console.log("requests 3d data from file");



//------------Neeche wala method pehle file read karge uske baad hi kuchh print karega------------------------
//Example of Blocking Code (Synchronous) -->

// try{
//     const data = fs.readFileSync('data.txt',"utf8");
//     console.log('File content ', data);
// }
// catch(err){
//     console.log('Error reading file:', err.message);
// }
// console.log("This will work after file read is completed.");


//--------------------------------------- Write version of asynchronous code-------------------------------------------------------------------
// fs.writeFile("code.txt","Hello coders! Welcome",(err)=>{
//     if(err){
//         console.log("Error in writing file:", err.message);
//     }
//     console.log("File written successfully");
// })


//------------         Append version of asynchronous code              --------------------------------------------------------------

// fs.appendFile("data.txt","\nThis is appended text.",(err)=>{
//     if(err){
//         console.log("Error in writing file:", err.message);
//         return;
//     }
//     console.log("File appended successfully");
// })


//----------------- deleting a file asynchronously-----------------
//  fs.unlink("code.txt",(err)=>{
//     if(err){
//         console.log("Error in deleting file:", err.message);
//         return;
//     }
//     console.log("File deleted successfully");
//  })

//----------------- renaming a file asynchronously-----------------
//  fs.rename("data.txt","myData.txt",(err)=>{
//     if(err){
//         console.log("Error in renaming file:", err.message);
//         return;
//     }
//     console.log("File renamed successfully");
//  })

 //creating a folder
fs.mkdir("myFolder",(err)=>{
    if(err){
        console.log("Error in creating folder:", err.message);
        return;
    }
    console.log("Folder created successfully");
})
