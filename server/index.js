import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postsRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "5MB", extended: true }));
app.use(express.urlencoded({ limit: "5MB", extended: true }));
app.use(cors());

app.use("/posts", postsRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
  })
  .catch((error) => {
    console.log({ message: error.message });
  });
