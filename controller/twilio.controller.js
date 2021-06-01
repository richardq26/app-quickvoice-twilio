const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

exports.quickcall = async (req, res) => {
  const client = require("twilio")(accountSid, authToken);
  const message = req.body.message;
  console.log(req.body);
  client.calls
    .create({
      twiml: `<Response><Say voice="alice" language="es-MX">${message}</Say></Response>`,
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

exports.sendSMS = async (req, res) => {
  const client = require("twilio")(accountSid, authToken);
  client.messages
    .create({
      to: req.body.number,
      from: process.env.FROM_NUMBER,
      body: req.body.text,
    })
    .then((message) => {
      console.log(`Message ${message.sid} sent!`);
      res.status(200).json({ msg: "Mensaje enviado!", sid: message.sid });
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json(error);
    });
};

exports.getVoiceMessage = async (req, res) => {
  const VoiceResponse = require("twilio").twiml.VoiceResponse;
  const response = new VoiceResponse();
  response.say(
    {
      voice: "woman",
      language: "es",
    },
    "Holaaa"
  );
  console.log(response.toString());
  return response.toString();
};
