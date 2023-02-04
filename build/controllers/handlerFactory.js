"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOne = exports.updateOne = exports.getAll = exports.getOne = exports.deleteOne = void 0;
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const appError_1 = __importDefault(require("../utils/appError"));
const apiFeatures_1 = __importDefault(require("../utils/apiFeatures"));
// type TModelAll = Model<IStation> | Model<ITrip> | Model<IStationToStation> | Model<IStationStats>
function deleteOne(Model) {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const doc = yield Model.findByIdAndDelete(req.params.id);
        if (!doc) {
            return next(new appError_1.default("No document found with that ID", 404));
        }
        res.status(204).json({
            status: "success",
            data: null,
        });
    }));
}
exports.deleteOne = deleteOne;
/**
 * @param {{ findById: (arg0: string) => any; }} Model
 * @param {any} popOptions
 */
function getOne(Model, popOptions = "") {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const reqId = req.params.id;
        const station_id = req.params.station_id;
        let query;
        if (reqId)
            query = Model.findById(reqId);
        if (station_id) {
            console.log("We are inside");
            const features = new apiFeatures_1.default(Model.find({ station_id: station_id }), "")
                .filter()
                .sort()
                .limitFields()
                .paginate();
            const doc = yield features.query;
            if (!doc) {
                return next(new appError_1.default("No document found with that ID", 404));
            }
            res.status(200).json({
                status: "success",
                data: {
                    data: doc,
                },
            });
        }
        if (popOptions)
            query = query === null || query === void 0 ? void 0 : query.populate(popOptions);
        const doc = yield query;
        if (!doc) {
            return next(new appError_1.default("No document found with that ID", 404));
        }
        res.status(200).json({
            status: "success",
            data: {
                data: doc,
            },
        });
    }));
}
exports.getOne = getOne;
function getAll(Model) {
    return (0, catchAsync_1.default)((req, res, _next) => __awaiter(this, void 0, void 0, function* () {
        let filter = {};
        if (req.params.stationId)
            filter = { $or: [{ departure_station_id: req.params.stationId }, { return_station_id: req.params.stationId }] };
        const features = new apiFeatures_1.default(Model.find(filter), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const doc = yield features.query;
        res.status(200).json({
            status: "success",
            results: doc.length,
            data: {
                data: doc
            },
        });
    }));
}
exports.getAll = getAll;
function updateOne(Model) {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const doc = yield Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!doc) {
            return next(new appError_1.default("No document found with that ID", 404));
        }
        res.status(200).json({
            status: "success",
            data: {
                data: doc,
            },
        });
    }));
}
exports.updateOne = updateOne;
function createOne(Model) {
    return (0, catchAsync_1.default)((req, res, _next) => __awaiter(this, void 0, void 0, function* () {
        const doc = yield Model.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                data: doc,
            },
        });
    }));
}
exports.createOne = createOne;
