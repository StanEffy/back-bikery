import catchAsync from "../utils/catchAsync"
import AppError from "../utils/appError"
import APIFeatures from "../utils/apiFeatures"
import {Model} from "mongoose"
import {IStation, IStationStats, IStationToStation, ITrip} from "../models/types"

type ModelTripOrStation = Model<IStation> | Model<ITrip>
type ModelAll = Model<IStation> | Model<ITrip> | Model<IStationToStation> | Model<IStationStats>

export function deleteOne(Model: ModelTripOrStation) {
	return catchAsync(async (req, res, next) => {
		const doc = await Model.findByIdAndDelete(req.params.id)

		if (!doc) {
			return next(new AppError("No document found with that ID", 404))
		}

		res.status(204).json({
			status: "success",
			data: null,
		})
	})
}

/**
 * @param {{ findById: (arg0: string) => any; }} Model
 * @param {any} popOptions
 */
export function getOne(Model:ModelTripOrStation, popOptions = "") {
	return catchAsync(async (req, res, next) => {
		const reqId = req.params.id
		const station_id = req.params.station_id

		let query

		if(reqId) query = Model.findById(reqId)

		if(station_id) {
			console.log("We are inside")
			const features = new APIFeatures(Model.find({station_id: station_id}), "")
				.filter()
				.sort()
				.limitFields()
				.paginate()

			const doc = await features.query

			if (!doc) {
				return next(new AppError("No document found with that ID", 404))
			}

			res.status(200).json({
				status: "success",
				data: {
					data: doc,
				},
			})
		}


		if (popOptions) query = query.populate(popOptions)
		const doc = await query

		if (!doc) {
			return next(new AppError("No document found with that ID", 404))
		}

		res.status(200).json({
			status: "success",
			data: {
				data: doc,
			},
		})
	})
}

export function getAll(Model: ModelAll) {
	return catchAsync(async (req, res, _next) => {
		const filter = {}

		if (req.params.stationId) filter = { $or: [{departure_station_id: req.params.stationId}, { return_station_id: req.params.stationId}]}

		const features = new APIFeatures(Model.find(filter), req.query)
			.filter()
			.sort()
			.limitFields()
			.paginate()
		// const doc = await features.query.explain();
		const doc = await features.query

		res.status(200).json({
			status: "success",
			results: doc.length,
			data: {
				data: doc,
				// stats: statsObject
			},
		})
	})
}

export function updateOne(Model: ModelAll) {
	return catchAsync(async (req, res, next) => {
		const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		})

		if (!doc) {
			return next(new AppError("No document found with that ID", 404))
		}

		res.status(200).json({
			status: "success",
			data: {
				data: doc,
			},
		})
	})
}

export function createOne(Model: ModelAll) {
	return catchAsync(async (req, res, _next) => {

		const doc = await Model.create(req.body)

		res.status(201).json({
			status: "success",
			data: {
				data: doc,
			},
		})
	})
}
