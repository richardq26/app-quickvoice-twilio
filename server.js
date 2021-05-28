const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("port", process.env.PORT || 3500);

app.use(express.urlencoded({ extended: false }));

var twilioRoutes = require("./routes/twilio.routes");
//Middlewares
app.use(morgan("dev"));
app.use("/twilio", twilioRoutes);
module.exports = app;
