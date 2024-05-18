const jwt = require("jsonwebtoken");
module.exports = function verifyToken(req, res, next) {
  const token = req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(403).json({ error: "No token provided" }); 
  }

  jwt.verify(token, process.env.User_access_tocken, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.username = decoded.username;
    next();
  });
};