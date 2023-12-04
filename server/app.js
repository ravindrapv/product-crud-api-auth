const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());

// Load routes
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

// Use routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
