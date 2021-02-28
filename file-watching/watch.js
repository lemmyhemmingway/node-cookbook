const fs = require("fs");
const moment = require("moment");
const file = "file.txt";

fs.watchFile(file, (current, previos) => {
    const time = moment().format("MMMM Do YYYY, h:mm:ss a");
    return console.log(`${file} updated ${time}`)
});