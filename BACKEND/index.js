console.log("Our first JS program is running!");
//to print use this command: node filename.js
const http = require("http");
// require ke through import karte hai
const server = http.createServer((req, res) => {
   res.end("<h1>Hello World!</h1>");
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
//node ke woh modules hum jinhe bina install kiye use kar sakte hai unhe core modules kehte hai. http bhi ek core module hai.
 