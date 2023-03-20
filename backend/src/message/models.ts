import { getModelForClass, prop } from "@typegoose/typegoose";

class Message {
  constructor(val: string) {
    this.val = val;
  }

  @prop()
  public val: string;
}

const MessageModel = getModelForClass(Message);
export { Message, MessageModel };
