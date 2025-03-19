import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Write API
app.post("/items", async (req, res) => {
  const { name, price } = req.body;
  const item = await prisma.item.create({
    data: { name, price },
  });
  res.json(item);
});

// Read API
app.get("/items", async (_, res) => {
  const items = await prisma.item.findMany();
  res.json(items);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
