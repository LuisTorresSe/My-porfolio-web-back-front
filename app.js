const express = require("express");
const app = express();
const inboxRouter = require("./controllers/inbox");
const mongoose = require("mongoose");
const logger = require("./utils/logger");
const config = require("./utils/config");

mongoose.set("strictQuery", false);
//connecting a base data
try {
  mongoose.connect(config.MONGOURL);
  logger.info("conected to MongoDB");
} catch (error) {
  logger.error("error connecting to mongoDB", error.message);
}

// middlewares

app.use(express.json());
app.use("/api/inbox", inboxRouter);

module.exports = app;
