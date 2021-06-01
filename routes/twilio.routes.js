const{Router}=require("express");
const { quickcall, sendSMS, getVoiceMessage } = require("../controller/twilio.controller");
const router= Router();
const path = require("path")
router.post("/quickcall", quickcall);
router.post("/sendSMS", sendSMS )
// router.get("/message", getVoiceMessage)
// router.get("/voiceXML.xml", (req,res)=>{
//     res.sendFile(path.join(__dirname,"../views/messageVoice.xml"))
// }), 
module.exports = router;