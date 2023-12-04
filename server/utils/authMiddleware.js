const jwt = require("jsonwebtoken");

const verifyTokenAndRole = (roles) => (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "Unauthorized: Token missing" });
  }

  jwt.verify(token.split(" ")[1], "secret_key", (err, user) => {
    if (err) {
      console.log("Error decoding token:", err);
      return res.status(403).json({ message: "Unauthorized: Invalid token" });
    }

    if (!roles.includes(user.role)) {
      return res
        .status(403)
        .json({ message: "Unauthorized: Insufficient role privileges" });
    }

    req.user = user;
    next();
  });
};

module.exports = verifyTokenAndRole;
