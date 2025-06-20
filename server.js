const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/conn");
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const path = require("path");
const notificationRouter = require("./routes/notificationRouter");


const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);
app.use(express.static(path.join(__dirname, "./client/build")));

// server.js (Express)
app.post("/logout", (req, res) => {
  // Example: If using cookies for auth

  res.status(200).json({ message: "Logged out successfully" });
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {});
