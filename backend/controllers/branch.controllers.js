import Message from "../models/branch.models.js";


export const createMessage = async (req, res) => {
  console.log(req.body);
  const newMessage = new Message({
    username: req.body.username,
    email: req.body.email,
    phone:req.body.phone,
    message: req.body.message,
  });
  try {
    const savedMessage = await newMessage.save();
    res.status(201).send(savedMessage);
  } catch (err) {
    res.status(500).send("the error is while saving")
  }
};
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ messageId: req.params.id });
    res.status(200).send(messages);
  } catch (err) {
    res.status(500).send("error while fetching the data")
  }
};