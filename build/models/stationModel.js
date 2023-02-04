"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const stationSchema = new mongoose_1.Schema({
    Name: {
        type: String,
        required: [true, "Station must have a name"],
        unique: true,
        trim: true,
    },
    Namn: {
        type: String,
        required: [true, "Station must have a name"],
        unique: true,
        trim: true,
    },
    Nimi: {
        type: String,
        required: [true, "Station must have a name"],
        unique: true,
        trim: true,
    },
    Osoite: {
        type: String,
        required: [true, "Station must have address"],
        trim: true,
    },
    Kaupunki: {
        type: String,
        required: [true, "Station must be in some city"],
        enum: {
            values: ["Espoo", "Helsinki", "Vantaa"],
            message: "It is either Espoo, Helsinki or Vantaa",
        },
        trim: true,
    },
    Stad: {
        type: String,
        required: [true, "Station must be in some city"],
        enum: {
            values: ["Espoo", "Helsinki", "Vantaa"],
            message: "It is either Espoo, Helsinki or Vantaa",
        },
        trim: true,
    },
    Operaattor: {
        type: String,
        required: [true, "Station must be under control"],
    },
    Kapasiteet: {
        type: Number,
        required: true
    },
    x: {
        type: Number,
        required: [true, "without coords it doesnt have any sense"]
    },
    y: {
        type: Number,
        required: [true, "without coords it doesnt have any sense"]
    },
    FID: {
        type: Number,
        required: false,
        unique: true
    },
    ID: {
        type: Number,
        required: false,
        unique: true
    },
});
const Station = (0, mongoose_1.model)("Station", stationSchema);
exports.default = Station;
