const express = require('express'); // Express App
const router = express.Router(); // Router Logic

// import the controllers
const tripsController = require('../controllers/trips');

// Define route for trips endpoint

// Get Method routes tripList
router.route('/trips').get(tripsController.tripsList);

// GET Method rutes tripsFindByCode - requires parameter
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode);

module.exports = router;
