import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import messageRouter from "./message/views";
import swaggerUI from "swagger-ui-express";
import spec from "../api-spec.json";
import { dbConnect } from "./database";

const app = express();
app.use(cors());

// Middleware to parse json request bodies
app.use(bodyParser.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(spec));

app.use("/message", messageRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 8000, async () => {
  console.log("✅ Server is up and running");
  await dbConnect();
});
