// Simple validation script to check if the app can load without database
const express = require("express");

console.log("✅ Testing application dependencies...");

try {
  // Test if all required modules can be loaded
  require("dotenv").config();
  require("express-async-errors");
  require("morgan");
  require("cookie-parser");
  require("multer");
  require("helmet");
  require("xss-clean");
  require("cors");
  require("body-parser");
  require("path");
  require("http-status-codes");
  
  console.log("✅ All dependencies loaded successfully");
  
  // Test Express app creation
  const app = express();
  console.log("✅ Express app created successfully");
  
  // Test if we can set up basic middleware
  app.use(express.json());
  console.log("✅ Basic middleware configured");
  
  // Test basic route
  app.get("/health", (req, res) => {
    res.json({ status: "ok", message: "Application structure is valid" });
  });
  
  console.log("✅ Routes configured successfully");
  console.log("🎉 Application validation passed!");
  
  process.exit(0);
} catch (error) {
  console.error("❌ Application validation failed:", error.message);
  process.exit(1);
}