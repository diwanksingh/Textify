import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token expires in 7 days
  });

  res.cookie("jwt", token, {
    httpOnly: true,    // Ensures the cookie is not accessible via JavaScript (XSS protection)
    secure: process.env.NODE_ENV === "production", // Cookie is sent only over HTTPS in production
    sameSite: "None",  // This is required for cross-origin cookies in production
    maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie validity (7 days)
  });

  return token;  // Return token in case you need it elsewhere
};
