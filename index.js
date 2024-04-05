import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = 8000;
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.post("/visited", async (req, resp) => {
  try {
    console.log(req.body);
    if (!req.body.name) {
      throw "No name found";
    }
    await prisma.user.create({
      data: {
        name: req.body.name,
      },
    });
    return resp.json({
        status:'Success',
        data:"Successfull created the user"
    })
  } catch (err) {
    console.log(err)
    return resp.json({
        status:'Error',
        data:"Failed creating the user"
    })
  }
});
app.listen(port, () => console.log(`Listening on port ${port}...`));
