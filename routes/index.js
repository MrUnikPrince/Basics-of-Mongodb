const express = require('express');
const router = express.Router();
const homeController = require("../controllers/Home_controller")
console.log("Router is running");

router.get("/", homeController.home);
router.use("/users", require("./users"));


router.get("/about", homeController.about);
router.get("/contact", homeController.contact);
module.exports = router;