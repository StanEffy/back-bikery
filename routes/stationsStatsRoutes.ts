import {getAllStationsStats, getStationStats} from '../controllers/stationsStatsController';
import {Router} from "express";

const router = Router()

router
    .route('/')
    .get(getAllStationsStats)
router
    .route('/:id')
    .get(getStationStats)

export default router;
