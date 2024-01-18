import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./src/routes/linkRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

mongoose.connect(process.env.MONGODB);

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
