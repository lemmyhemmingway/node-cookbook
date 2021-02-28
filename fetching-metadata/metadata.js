const fs = require("fs");
const file = "file.txt";
const testFile = "test.txt";

fs.chmodSync(
    file,
    fs.constants.S_IRUSR |
    fs.constants.S_IWUSR |
    fs.constants.S_IRGRP |
    fs.constants.S_IWGRP |
    fs.constants.S_IROTH
);

fs.chmodSync(file, 0o644);

function printMetadata(file) { 
    try {
    const fileStats = fs.statSync(file);
    console.log(fileStats);
    } catch(error) {
        console.error("Error reading file", file);
    }
}    

printMetadata(testFile);

