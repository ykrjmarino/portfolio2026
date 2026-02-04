import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Backend is running UwU!"));

app.listen(port, () => {
  // db.connect();
  console.log(`✅ Backend running at http://localhost:${port} (ykrjm2025)`);
});