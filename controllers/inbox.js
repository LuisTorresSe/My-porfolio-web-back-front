const inboxRouter = require("express").Router();
const Inbox = require("../models/inbox");
const logger = require("../utils/logger");

inboxRouter.get("/", async (req, res) => {
  try {
    const response = await Inbox.find({});
    res.json(response).status(200);
  } catch (error) {
    logger.info("ha ocurrido un error");
  }
});

inboxRouter.post("/", async (req, res) => {
  const request = req.body;

  const newInbox = new Inbox({
    name: request.name,
    telf: request.telf || "0",
    email: request.email,
    description: request.description,
  });

  try {
    const saveMessage = await newInbox.save();
    res.json(saveMessage);
  } catch (error) {
    logger.error("ha ocurrido un error", error.message);
  }
});

module.exports = inboxRouter;
