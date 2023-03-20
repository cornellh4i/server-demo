import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const dataFile = path.join(process.cwd(), "data/display.json");
  if (req.method === "GET") {
    const content = await fs.readFile(dataFile, "utf-8");

    const message = JSON.parse(content);
    res.json(message);
  } else if (req.method === "PUT") {
    const { message } = req.body;
    const toWrite = JSON.stringify({ message: message });
    await fs.writeFile(dataFile, toWrite, "utf-8");
    res.status(200).json({ success: true, newMessage: message });
  }
};

export default handler;
