const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/crud_app", {
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
