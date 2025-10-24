const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Middleware to verify JWT
function verifyToken(req, res, next) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
}

// Example protected route
router.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Welcome to your profile!",
    user: req.user,
  });
});

module.exports = router;
