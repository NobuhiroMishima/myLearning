import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  const imagePath = path.join(__dirname, "../../src/assets/images/noMovie.png");
  res.sendFile(imagePath, (err) => {
    if (err) {
      console.error("Error occurred while sending the image:", err);
      res.status(500).json({ msg: "Error sending image", error: err.message });
    }
  });
});

export default router;
