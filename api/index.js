import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/mern-auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
