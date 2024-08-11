const express = require('express'); // Express App
const router = express.Router(); // Router Logic
const { expressjwt: jwt } = require("express-jwt");

const auth = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  userProperty:"payload",
});

// import the controllers
const authController = require("../controllers/authentication");
const tripsController = require('../controllers/trips');

router.route("/login").post(authController.login);
router.route("/register").post(authController.register);

// Define route for trips endpoint
router
  .route("/trips")
  .get(tripsController.tripsList) // Get Method routes tripList
  .post(auth,tripsController.tripsAddTrip); // POST Method Adds a Trip

// GET Method rutes tripsFindByCode - requires parameter
router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode)
  .put(auth,tripsController.tripsUpdateTrip);

module.exports = router;
