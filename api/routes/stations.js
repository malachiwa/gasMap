const express = require('express');
const router = express.Router();

const {
    getAllStations,
    createNewStation,
    updateStation,
    deleteStation
} = require('../controllers/stations');

router.get('/', getAllStations);

router.post('/', createNewStation);

router.patch('/:stationId', updateStation);

router.delete('/:stationId', deleteStation);

module.exports = router;