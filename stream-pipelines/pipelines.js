const fs = require("fs");

const {
    pipeline,
    Transform
} = require("stream")

const uppercase = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
})
pipeline(
    fs.createReadStream("file.txt"),
    uppercase,
    fs.createWriteStream("newFile.txt"),
    (err) => {
        if (err) {
            console.error("Pipiline failed", err);
        } else {
            console.log("Pipiline succeeded.")
        }
    }
);