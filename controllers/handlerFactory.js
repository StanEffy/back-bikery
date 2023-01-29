// @ts-nocheck
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import APIFeatures from '../utils/apiFeatures';
import searchTopStations, {stationType} from "../utils/searchTopStations";

export function deleteOne(Model) {
    return catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc) {
            return next(new AppError('No document found with that ID', 404));
        }

        res.status(204).json({
            status: 'success',
            data: null,
        });
    });
}

/**
 * @param {{ findById: (arg0: string) => any; }} Model
 * @param {any} popOptions
 */
export function getOne(Model, popOptions = {}) {
    console.log("WE ARE HERE")
    console.log(Model)
    return catchAsync(async (req, res, next) => {
        let reqId= req.params.id
        let query = Model.findById(reqId);
        if (popOptions) query = query.populate(popOptions);
        const doc = await query;

        if (!doc) {
            return next(new AppError('No document found with that ID', 404));
        }

        res.status(200).json({
            status: 'success',
            data: {
                data: doc,
            },
        });
    });
}

export function getAll(Model) {
    return catchAsync(async (req, res, next) => {
        let filter = {};
        if (req.params.stationId) filter = {departure_station_id: req.params.stationId};

        const features = new APIFeatures(Model.find(filter), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        // const doc = await features.query.explain();
        const doc = await features.query;

        const arrayOfStationValues = req.originalUrl.slice(req.originalUrl.indexOf("/?")).split("&").filter(str => str.indexOf("station") > -1).map(str => str.slice(str.indexOf("=")+1))
        let statsObject = {}

        if (arrayOfStationValues.length) {

            const allResDeparture = new APIFeatures(Model.find({departure_station_id: arrayOfStationValues[0]}), "")
            const mostDeparture = await allResDeparture.query;

            let returnsObj = searchTopStations(mostDeparture, stationType.departure)
            let returnsArr = []
            for (let key in returnsObj) {
                returnsArr.push([key, returnsObj[key]])
            }

            //as it is a tuple second element is always
            statsObject.returns = returnsArr.sort((a, b) => b[1] - a[1]).slice(0, 5)

            const allResArrival= new APIFeatures(Model.find({return_station_id: arrayOfStationValues[0]}), "")
            const mostArrivals = await allResArrival.query;

            let departuresObj = searchTopStations(mostArrivals, stationType.return)
            let departuresArr = []
            for (let key in departuresObj) {
                departuresArr.push([key, departuresObj[key]])
            }

            //as it is a tuple second element is always
            statsObject.departures = departuresArr.sort((a, b) => b[1] - a[1]).slice(0, 5)
        }

            // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: doc.length,
            data: {
                data: doc,
                stats: statsObject
            },
        });
    });
}

export function updateOne(Model) {
    return catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!doc) {
            return next(new AppError('No document found with that ID', 404));
        }

        res.status(200).json({
            status: 'success',
            data: {
                data: doc,
            },
        });
    });
}

export function createOne(Model) {
    return catchAsync(async (req, res, next) => {

        const doc = await Model.create(req.body);


        res.status(201).json({
            status: 'success',
            data: {
                data: doc,
            },
        });
    });     }
