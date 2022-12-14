const express = require('express');
const { getAllTours, createTour, getTour, updateTour, deleteTour, aliasTopTours,getToursStats } = require('../controllers/tourController');

const router = express.Router();

// router.param('id', checkID);
router.route('/tour-5-cheap').get(aliasTopTours,getAllTours);
router.route('/tour-stats').get(getToursStats);


router.route('/')
    .get(getAllTours)
    .post(createTour);

router.route('/:id')
    .get(getTour)
    .put(updateTour)
    .delete(deleteTour);

module.exports = router;