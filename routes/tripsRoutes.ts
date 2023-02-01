import {Router} from 'express';
import {getAllTripsFromStation, createTrip, getTrip, updateTrip, deleteTrip} from '../controllers/tripController';

const router = Router()

router
    .route('/')
    .get(getAllTripsFromStation)
    .post(createTrip)

router
    .route('/allTrips/:stationId')
    .get(getAllTripsFromStation)

router
    .route('/:id')
    .get(getTrip)
    .patch(
        updateTrip
    )
    .delete(
        deleteTrip
    );

export default router;
