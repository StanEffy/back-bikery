"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const mongoose_1 = require("mongoose");
(0, dotenv_1.config)({ path: "./config.env" });
const app_1 = __importDefault(require("./app"));
const mode = process.env.NODE_ENV || "";
const db_string = process.env.DATABASE;
const DB = mode === "production" ? db_string.replace("password", process.env.PASSWORD) : "mongodb://127.0.0.1:27017/bikery?directConnection=true";
(0, mongoose_1.connect)(DB, {
// useNewUrlParser: true,
// useCreateIndex: true,
// useFindAndModify: false,
})
    .then(() => console.log("DB connection successful!"));
const port = process.env.PORT || 3002;
const server = app_1.default.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
process.on("unhandledRejection", (err) => {
    console.log("UNHANDLED REJECTION! 💥 Shutting down...");
    console.log(err);
    // console.log(err?.name, err?.message);
    server.close(() => {
        process.exit(1);
    });
});
process.on("uncaughtException", (err) => {
    console.log(err.name, err.message, err);
    server.close(() => {
        process.exit(1);
    });
});
