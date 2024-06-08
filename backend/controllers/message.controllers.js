import Simple_message from "../models/message.models.js";

export const createMessage = async (req, res, next) => {
  try {
    const newMessage = new Simple_message({
      username: req.body.username,
      email: req.body.email,
      message: req.body.message
    });
    const savedMessage = await newMessage.save();
    res.status(201).send(savedMessage);
  } catch (err) {
    res.status(500).send("the error is while saving");
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Simple_message.find({ messageId: req.params.id });
    res.status(200).send(messages);
  } catch (err) {
    res.status(500).send("error while fetching the data");
  }
};
