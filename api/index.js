import express from "express";
import dotenv from "dotenv";
import router from "../routers/feedbackRouter.js";
import dbConnect from "../config/database.js";

dotenv.config();
console.log("MONGODB_URL:", process.env.MONGODB_URL); // Should print the URI

const app = express();

const PORT = process.env.PORT || 3000;  


app.use(express.json());


app.use("/api/v1", router);

dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
