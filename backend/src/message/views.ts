import { Router } from "express";
import mongoose from "mongoose";
import MessageController from "./controllers";

// Note: we should use a try/catch to choose successJson or errorJson for responses
// this has been left out of this snippet for brevity
import { successJson, errorJson } from "../utils/jsonResponses";

const messageRouter = Router();

messageRouter.get("/", async (req, res) => {
  // #swagger.tags = ['Message']
  res.status(200).send(await MessageController.getMessage());
});

messageRouter.put("/update", async (req, res) => {
  // #swagger.tags = ['Message']
  const { message } = req.body;
  res
    .status(200)
    .send(successJson(await MessageController.updateMessage(message)));
});

export default messageRouter;
