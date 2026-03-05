// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Stripe from "stripe";
import cors from "cors"; // Optional: for frontend requests
import paymentRoutes from "./routes/payment.js"; // your payment routes
import userRoutes from "./routes/user.js"; // example other routes

dotenv.config(); // load .env variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Stripe setup
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Routes
app.use("/api/payment", paymentRoutes);
app.use("/api/users", userRoutes); // example user routes

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected successfully");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.error("MongoDB connection error:", err.message));
