const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

// create user
router.get("/test", userController.userRouteTest);

module.exports = router;
