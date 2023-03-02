const express = require("express");
const logs = require("morgan");

const app = express();

const errorHandler = require("./src/middlewares/error.middleware");
const noPageFound = require("./src/middlewares/noPage.middleware");
const indexRouter = require("./src/routes/index");


app.use(logs("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", indexRouter);
app.use(errorHandler);
app.use(noPageFound);

module.exports = app;