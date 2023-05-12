const express = require("express");
const path = require("path");
const app = express();

var apiRouter = require("./routes/router_api");

app.use("/", apiRouter);

// app.use('')
app.listen(3000);
