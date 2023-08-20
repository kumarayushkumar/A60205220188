import express from 'express';
import allTrain from '../controllers/allTrains.js';
import train from '../controllers/trains.js';
import setApiHeaders from '../middlewares/setApiHeaders.js';

const router = express.Router();

router.get('/', setApiHeaders, allTrain).get('/:trainNumber', setApiHeaders, train);

export default router;