// routes/linkRoutes.js
import express from "express";
import cors from "cors";
import {
  createShortLink,
  redirectToOriginalUrl,
} from "../controllers/linkController.js";

const router = express.Router();

// Aplica CORS solo a las rutas necesarias
router.post("/api/shorter", cors(), createShortLink);

router.get("/:slug", redirectToOriginalUrl);

export default router;
