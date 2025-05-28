/*const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

// Import route files
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

const app = express();
dotenv.config();

// --- Middleware ---

// CORS setup
app.use(
  cors({
    origin: ["http://localhost:5173", "https://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// JSON parsing
app.use(express.json());

// Serve static image files
app.use("/images", express.static(path.join(__dirname, "/images")));

// --- MongoDB Connection ---

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// --- File Upload with Multer ---

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    // Example: 1716323917381.jpg
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// File upload route
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    const fileUrl = `http://localhost:${PORT}/images/${req.file.filename}`;
    res.status(200).json({ filename: req.file.filename , url: fileUrl});
  } catch (err) {
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
});



// --- API Routes ---
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// --- Root Route ---
app.get("/", (req, res) => {
  res.send("🚀 Backend is working");
});

// --- Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});*/

// --- server.js (Backend Entry Point) ---
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

const app = express();
dotenv.config();

app.use(cors({
  origin: ["http://localhost:5173", "https://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "images"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    const fileUrl = `http://localhost:${PORT}/images/${req.file.filename}`;
    res.status(200).json({ filename: req.file.filename, url: fileUrl });
  } catch (err) {
    res.status(500).json({ message: "Upload failed", error: err.message });
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.get("/", (req, res) => res.send("🚀 Backend is working"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));

