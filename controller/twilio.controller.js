const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

exports.quickcall = (req, res) => {
  const client = require("twilio")(accountSid, authToken);
  console.log(req.body.number)
  client.calls
    .create({
      url: "http://demo.twilio.com/docs/voice.xml",
      to: req.body.number,
      from: process.env.FROM_NUMBER,
    })
    .then((call) => {
      console.log(call.sid);
      return res.status(200).json(call);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};

// exports.call = (req, res) => {
//   const VoiceResponse = require("twilio").twiml.VoiceResponse;
//   const twiml = new VoiceResponse();
//   twiml.say("Hello from your pals at Twilio! Have fun.");
//   res.status(200).json(twil.toString());
// };
