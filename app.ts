import express from "express";
import rateLimit from "express-rate-limit";

import tripsRouter from "./routes/tripsRoutes";
import stationsRouter from "./routes/stationsRoutes";
import stationsStatsRouter from "./routes/stationsStatsRoutes";

import path from "path";
import cors from "cors";
import AppError from "./utils/appError";

const bodyParser = require("body-parser");

const app = express();

const corsOptions = {
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

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

export default app;
