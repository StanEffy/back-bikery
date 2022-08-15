const express = require('express');
const rateLimit = require('express-rate-limit');

const tripsRouter = require('./routes/tripsRoutes')
const stationsRouter = require('./routes/stationsRoutes')
const stationsStatsRouter = require('./routes/stationsStatsRoutes')

const AppError = require('./utils/appError');
const path = require("path");
const cors = require('cors')


const app = express();

const corsOptions ={
    origin:'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
const limiter = rateLimit({
    max: 600,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!',
});

app.use(express.static(path.join(__dirname, 'client')));

app.use('/api', limiter);

app.use('/api/v1/trips', tripsRouter);
app.use('/api/v1/stations', stationsRouter);
app.use('/api/v1/stats', stationsStatsRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
