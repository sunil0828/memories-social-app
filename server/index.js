import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/users", userRoutes);

const CONNECTION_URL =
  process.env.CONNECTION_URL || "mongodb://localhost/memories-social-app";

// const CONNECTION_URL = "mongodb://localhost/memories-social-app";

// const CONNECTION_URL =
//   "﻿mongodb://sunil:sunil123123@cluster0-shard-00-00.ia4e4.mongodb.net:27017,cluster0-shard-00-01.ia4e4.mongodb.net:27017,cluster0-shard-00-02.ia4e4.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-cm4is2-shard-0&authSource=admin&retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
