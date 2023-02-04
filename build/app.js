"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const tripsRoutes_1 = __importDefault(require("./routes/tripsRoutes"));
const stationsRoutes_1 = __importDefault(require("./routes/stationsRoutes"));
const stationsStatsRoutes_1 = __importDefault(require("./routes/stationsStatsRoutes"));
const stationToStationsRouter_1 = __importDefault(require("./routes/stationToStationsRouter"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const appError_1 = __importDefault(require("./utils/appError"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
//Whitelist for localhost cors request
const whitelist = ["http://localhost:3000", "http://localhost:8080"];
const corsOptions = {
    credentials: true,
    optionSuccessStatus: 200,
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(null, false);
        }
    }
};
app.use((0, cors_1.default)(corsOptions));
const limiter = (0, express_rate_limit_1.default)({
    max: 600,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this IP, please try again in an hour!",
});
app.use(express_1.default.static(path_1.default.join(__dirname, "client")));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use("/api", limiter);
app.use("/api/v1/trips", tripsRoutes_1.default);
app.use("/api/v1/stations", stationsRoutes_1.default);
app.use("/api/v1/stats", stationsStatsRoutes_1.default);
app.use("/api/v1/stationToStation", stationToStationsRouter_1.default);
app.all("*", (req, _res, next) => {
    next(new appError_1.default(`Can't find ${req.originalUrl} on this server!`, 404));
});
exports.default = app;
