import express from "express";
import authRoutes from "./routes/auth.routes";

const app = express();
app.use(express.json());

app.use("/api/v1", authRoutes);

app.get("/", (req, res) => {
  res.send("Bizflow API is running!");
});

export default app;