//YAHA PE HUMNE SERVER PE CHEEZEIN READ KI THI
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {

//   if (req.url === "/read-employee") {

//     fs.readFile("employeeData.txt", "utf-8", (err, data) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("File not found");
//         return;
//       }

//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end(data);
//     });

//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Route not found");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//    console.log(`Server is running on http://localhost:${PORT}`);
// });


//YAHA PE HUMNE SERVER PE CHEEZEIN WRITE KI THI


// const http = require("http");
// const fs = require("fs");

// //JSON ko string mein convert karne ke liye JSON.stringify use karte hai
// //string ko JSON mein convert karne ke liye JSON.parse use karte hai

// const server = http.createServer((req, res) => {

//   if (req.url === "/write-employee") {
//     //JSON DATA
//      const empData = {
//       id: 101,
//       name:"Vaishnavi",
//       department: "AIML"
//      }

//     fs.writeFile("empData.json", 
//     JSON.stringify(empData,null,2), (err) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("Error writing JSON file");
//         return;
//       }

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({message: "Employee data written successfully"}));

//     });

//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Route not found");
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//    console.log(`Server is running on http://localhost:3000/write-employee`);
// });


//Now trying to read the above JSON file on the server
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  if (req.url === "/read-employee") {

    // 🔹 Changed file name from .txt → .json
    // (err,data) => {} is a callback function which will be called after the file is read. It has two parameters: err and data. err will contain the error if there is any, and data will contain the content of the file if it is read successfully.
    fs.readFile("empData.json", "utf-8", (err, data) => {

      if (err) {
        // 🔹 Changed Content-Type to application/json (since we are returning JSON)
        res.writeHead(500, { "Content-Type": "application/json" });

        // 🔹 Sending JSON response instead of plain text
        res.end(JSON.stringify({ error: "File not found" }));
        return;
      }

      try {
        // 🔹 Added JSON.parse() to convert string data → JavaScript object
        const jsonData = JSON.parse(data);

        // 🔹 Changed Content-Type to application/json
        res.writeHead(200, { "Content-Type": "application/json" });

        // 🔹 Sending proper JSON response
        res.end(JSON.stringify(jsonData));

      } catch (parseError) {

        // 🔹 Added error handling for invalid JSON format
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON format" }));
      }
    });

  } else {

    // 🔹 Also changed this to application/json for consistency
    res.writeHead(404, { "Content-Type": "application/json" });

    // 🔹 Sending JSON instead of plain text
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/read-employee`);
});
