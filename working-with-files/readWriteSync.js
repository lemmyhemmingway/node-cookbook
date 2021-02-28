// File System Module
const fs = require("fs");
const path = require("path");

// process.cwd() is a function on the global process object that returns the current
// directory of the Node.js process
const filepath = path.join(process.cwd(), "hello.txt");
const contents = fs.readFileSync(filepath, "utf-8");
console.log("File Contents", contents);