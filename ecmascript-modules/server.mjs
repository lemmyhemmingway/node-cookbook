import express from "express"
import { name } from "./get-name/index"
const PORT = 3000;
const app = express();

app.get("/", (req, res) => res.send("Hello from expreess" + name))

app.listen(PORT, () => {
    console.log("server listening")
})