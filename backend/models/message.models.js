import mongoose from "mongoose";
const { Schema } = mongoose;

const Simple_message = new Schema(
  {
    username: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model("Simple_message", Simple_message);
