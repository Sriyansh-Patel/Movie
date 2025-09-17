import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./src/db/db.js";
import authRouter from "./src/routes/authRoutes.js";
import videoRouter from "./src/routes/videoRoutes.js";
import cors from "cors";



dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use(cors({
  origin: 'http://localhost:5173', // Adjust this to your frontend's URL
  credentials: true,
}));

app.use("/api/auth", authRouter);
app.use("/api/videos", videoRouter);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDb()
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer();
