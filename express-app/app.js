const express = require('express')
const path = require('path')
const index = require('./routes/index')
const logger = require('./middleware/logger')

const PORT = process.env.PORT || 3000;
const app = express();

const dev = process.env.NODE_ENV !== "production";

if (dev) {
    // dev specific config
}

app.use(logger());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", index)

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.listen(PORT, () => {
    console.log("PORT" + PORT)
})