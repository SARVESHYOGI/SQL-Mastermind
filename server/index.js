const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const planRoutes = require("./routes/planRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./db/connectDB");


dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
connectDB();
// Routes
app.use("/auth", authRoutes);
app.use("/plan", planRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));