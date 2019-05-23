const mongoose = require("mongoose");

const createEventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The event name is required"],
    minlength: 1
  },
  address: {
    type: String,
    required: [true, "The event address is required"]
  },
  city: {
    type: String,
    required: [true, "The event city is required"]
  },
  state: {
    type: String,
    required: [true, "The event state is required"]
  },
  zipcode: {
    type: Number,
    required: [true, "The event zipcode is required"]
  },
  description: {
    type: String
  },
  category: {
    type: String,
    required: [true, "The event category is required"]
  },
  picture: {
    type: String
  },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Event = mongoose.model("Event", createEventSchema);

module.exports = Event;
