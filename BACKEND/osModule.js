const os = require('os');
console.log("Platform: ", os.platform());
console.log("CPU Architecture: ", os.arch());
console.log("Total Memory: ", os.totalmem());
console.log("Free Memory: ", os.freemem());
console.log("Home Directory: ", os.homedir());
console.log("Uptime (seconds): ", os.uptime());
console.log("CPU Info: ", os.cpus());
console.log( "Temporary Directory: ", os.tmpdir())
console.log("CPU cores: ", os.cpus().length);
console.log("Host Name: ", os.hostname());
