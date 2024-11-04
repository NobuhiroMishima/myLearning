import multer from "multer";
import { Storage } from "@google-cloud/storage";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = new Storage({
  projectId: "mylearning-440311",
  keyFilename: path.resolve(__dirname, process.env.GOOGLE_APPLICATION_CREDENTIALS),
});

const bucket = storage.bucket(process.env.GCS_BUCKET_NAME);

const multerStorage = multer.memoryStorage();

const upload = multer({
  storage: multerStorage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const ext = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mime = allowedTypes.test(file.mimetype);
    if (ext && mime) {
      cb(null, true);
    } else {
      cb(new Error("Only JPEG, JPG, and PNG images are allowed"), false);
    }
  },
});

const uploadToGCS = async (file) => {
  const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  const ext = path.extname(file.originalname);
  const blob = bucket.file(`${file.originalname}-${uniqueSuffix}${ext}`);

  const blobStream = blob.createWriteStream({
    resumable: false,
    contentType: file.mimetype,
  });

  blobStream.end(file.buffer);

  return new Promise((resolve, reject) => {
    blobStream.on('finish', () => {
      resolve(blob.publicUrl());
    });
    blobStream.on("error", (err) => {
      reject(`Unable to upload image, something went wrong: ${err}`);
    });
  });
};

export default upload;
export { uploadToGCS };