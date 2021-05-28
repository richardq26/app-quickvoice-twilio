const{Router}=require("express");
const { quickcall } = require("../controller/twilio.controller");
const router= Router();

router.post("/quickcall", quickcall);

module.exports = router;