const url = require("url")

const myURL = new URL("https://localhot:3000/login?user=admin&role=student");

console.log("Protocol: ", myURL.protocol);
console.log("Host: ", myURL.host);
console.log("Pathname: ", myURL.pathname);
console.log("Search Params: ", myURL.searchParams.get("role"));
console.log("User: ", myURL.searchParams.get("user"));
console.log("Role: ", myURL.searchParams.get("role"));
console.log(myURL.search);
console.log(myURL.toString());
console.log(myURL.href);