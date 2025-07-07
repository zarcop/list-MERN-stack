import express from "express";
import notesRoutes from "./routes/routes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
console.log("Server is running on port", PORT);

connectDB();

app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
    console.log("Server has been started on port 5001");
});
