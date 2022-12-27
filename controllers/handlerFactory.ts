import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';
import APIFeatures from '../utils/apiFeatures';
import {IStation, IStationStats, ITrip} from "../models/types";
import { Model } from 'mongoose';
import {NextFunction, Request, Response} from "express";

export function deleteOne(Model: Model<ITrip> | Model<IStation>) {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
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

export function getOne(Model, popOptions: never | undefined) {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        let query = Model.findById(req.params.id);
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

export function getAll(Model: Model<ITrip> | Model<IStation> | Model<IStationStats>) {
    return catchAsync(async (req: Request, res: Response, _next: NextFunction) => {

        let filter = {};
        if (req.params.stationId) filter = {departure_station_id: req.params.stationId};

        const features = new APIFeatures(Model.find(filter), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        // const doc = await features.query.explain();
        const doc = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: 'success',
            results: doc.length,
            data: {
                data: doc,
            },
        });
    });
}

export function updateOne(Model: Model<ITrip> | Model<IStation>) {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
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

export function createOne(Model: Model<ITrip> | Model<IStation>) {
    return catchAsync(async (req: Request, res: Response, _next: NextFunction) => {

        const doc = await Model.create(req.body);


        res.status(201).json({
            status: 'success',
            data: {
                data: doc,
            },
        });
    });     }
