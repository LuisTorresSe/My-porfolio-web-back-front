const mongoose = require("mongoose");
const inboxSchema = new mongoose.Schema({
  name: "",
  telf: "",
  email: "",
  description: "",
});

inboxSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Inbox = mongoose.model("inbox", inboxSchema);

module.exports = Inbox;
