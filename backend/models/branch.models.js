import mongoose from "mongoose";
const { Schema } = mongoose;

const Branch_message = new Schema(
  {
    username: {
      type: String,
      required: false,
      },
      email: {
        type: String,
        required: false,
        },
        phone: {
          type: Number,
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

export default mongoose.model("Branch_message", Branch_message);
