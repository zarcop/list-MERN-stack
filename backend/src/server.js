import express from "express";
import notesRoutes from "./routes/routes.js";
import { connectDB } from "./config/db.js";


const app = express();

connectDB();

app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
    console.log("Server has been started on port 5001");
});
