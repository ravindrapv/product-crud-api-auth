const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log("Token:", token);

  if (!token) {
    return res.status(403).json({ message: "Unauthorized: Token missing" });
  }

  jwt.verify(token.split(" ")[1], "secret_key", (err, user) => {
    if (err) {
      console.log("Error decoding token:", err);
      return res.status(403).json({ message: "Unauthorized: Invalid token" });
    }
    console.log("Decoded user:", user);
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
