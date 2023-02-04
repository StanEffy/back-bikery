/// <reference types="qs" />
/// <reference types="express" />
import { Model } from "mongoose";
import { IStation, IStationToStation, ITrip } from "../models/types";
type ModelTripOrStation = Model<IStation> | Model<ITrip>;
export declare function deleteOne(Model: ModelTripOrStation | Model<IStationToStation>): (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>, next: import("express").NextFunction) => void;
/**
 * @param {{ findById: (arg0: string) => any; }} Model
 * @param {any} popOptions
 */
export declare function getOne(Model: Model<any>, popOptions?: string): (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>, next: import("express").NextFunction) => void;
export declare function getAll(Model: Model<any>): (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>, next: import("express").NextFunction) => void;
export declare function updateOne(Model: Model<any>): (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>, next: import("express").NextFunction) => void;
export declare function createOne(Model: Model<any>): (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>, next: import("express").NextFunction) => void;
export {};
