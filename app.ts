const express = require("express");
const rateLimit = require("express-rate-limit");

const tripsRouter = require("./routes/tripsRoutes");
const stationsRouter = require("./routes/stationsRoutes");
const stationsStatsRouter = require("./routes/stationsStatsRoutes");

const ApplicationError = require("./utils/appError");
const path = require("path");
const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

const corsOptions = {
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// @ts-ignore
const limiter = rateLimit({
  max: 600,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", limiter);

app.use("/api/v1/trips", tripsRouter);
app.use("/api/v1/stations", stationsRouter);
app.use("/api/v1/stats", stationsStatsRouter);

app.all("*", (req, _res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;