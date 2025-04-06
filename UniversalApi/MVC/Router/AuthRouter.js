// MVC/Router/AuthRouter.js
const express = require("express");
const { createusercontroller } = require("../Controllers/useconyroller");
const router = express.Router();


router.post("/createuser",createusercontroller);

module.exports = router;
