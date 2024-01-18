// routes/linkRoutes.js
import express from "express";
import {
  createShortLink,
  redirectToOriginalUrl,
} from "../controllers/linkController.js";

const router = express.Router();

// Configura CORS específicamente para las rutas en este archivo
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://skipy.vercel.app");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

router.post("/api/shorter", createShortLink);

router.get("/:slug", redirectToOriginalUrl);

export default router;
