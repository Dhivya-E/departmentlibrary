const express = require("express");
const cors = require("cors");
const deplibraryDB = require("./database/deplibraryDB");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "20mb", extended: true }));

app.use(cors());


app.use("/deplibrary", require("./routes/deplibraryRoutes"));


deplibraryDB();


app.listen(port, () => console.log(`Server is running at ${port}`));
