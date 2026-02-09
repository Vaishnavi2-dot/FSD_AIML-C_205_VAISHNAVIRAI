const path= require("path");
// const filePath = path.join(__dirname,"files","abcd.txt");
// console.log("File Path: ", filePath);

const filePath =path.join(
    __dirname,
    "..",
    "..",
    "files",
    "abcd.txt"
);
console.log("File Path: ", filePath);
console.log("Base Name: ", path.basename(filePath));
console.log("File Extension: ", path.extname("student.pdf"));
console.log(path.resolve("files","abcd.txt"));
//.. ka kaam kisi directory se bahar ana hota hai. Yaha pe humne __dirname se start kiya, jo ki current directory ka path deta hai. Phir humne .. use kiya, jiska matlab hai ek level upar jana. Isliye humne .. ko do baar use kiya, taaki hum files directory ke bahar aa sakein aur phir waha se files directory ke andar ja sakein. Is tarah se humne abcd.txt file ka path construct kiya hai.

//difference between path.join and path.resolve
//path.join simply concatenates the given path segments and normalizes the resulting path. It does not consider the current working directory or any absolute paths. On the other hand, path.resolve resolves a sequence of paths into an absolute path. It considers the current working directory and any absolute paths provided in the arguments. If an absolute path is encountered, it discards all previous segments and starts from that absolute path. If no absolute path is found, it resolves the path relative to the current working directory.