import Trip from '../models/tripModel';
import {getAll, getOne, createOne, updateOne, deleteOne} from './handlerFactory';

export const getAllTripsFromStation = getAll(Trip);
export const getTrip = getOne(Trip);
export const createTrip = createOne(Trip);
export const updateTrip = updateOne(Trip);
export const deleteTrip = deleteOne(Trip);
