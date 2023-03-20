import mongoose from "mongoose";

import { MessageModel, Message } from "./models";

const getMessage = async () => {
  const res = await MessageModel.find({});
  if (res.length == 0) return "";
  return res[0].val;
};

const updateMessage = async (newVal: string) => {
  const orig = await getMessage();
  if (orig !== "") {
    await MessageModel.updateOne({ val: orig }, { val: newVal });
  } else MessageModel.create(new Message(newVal));
};

export default {
  getMessage,
  updateMessage,
};
