require('dotenv').config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: process.env.TO_NUMBER,
         from: process.env.FROM_NUMBER
       })
      .then(call => console.log(call.sid)).catch(err => console.log(err));