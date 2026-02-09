const crypto = require('crypto');

// const password = "mySecretPassword";
// const hash = crypto.createHash('sha256').update(password).digest('hex');
// console.log("Hashed Password: ", hash);
// console.log("Original Password: ",password);


 //createHash("sha256") is used to create a hash object that uses the SHA-256 algorithm.
 //.update(password) is used to update the hash object with the data (in this case, the password).
 //.digest('hex') is used to calculate the hash and return it in hexadecimal format.


 //Generating cryptographically strong random values

//  const token = crypto.randomBytes(16).toString('hex');
//  console.log("Reset link token: ", token);

 //This is can be used where we click on forget password or when we need to get email verification link.


 //Modern, secure password hashing
 crypto.scrypt("password123","salt", 64, (err, derivedKey)=>{
    if(!err){
        console.log("Derived Key: ", derivedKey.toString('hex'));
    }
 })