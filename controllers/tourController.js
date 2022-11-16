const fs = require('fs');
const path = `${__dirname}/../dev-data/data/tours-simple.json`;
const Tour = require('../models/tourModel');
//methods

const tours = JSON.parse(fs.readFileSync(path));
// exports.checkID = (req, res, next, val) => {
//     console.log(val);

//     if (req.params.id * 1 >= tours.length) {
//         return res.status(404).json({
//             status: 'Not Found',
//             message: "Invalid ID"
//         })
//     }
//     next();
// }
// exports.checkBody = (req, res, next) => {
//     console.log(req.body.name, req.body.price);
//     if (!req.body.name || !req.body.price) {
//         return res.status(400).json({
//             status: 'fail',
//             message: 'Missing name or price'
//         })
//     }
//     next();
// }

exports.getAllTours = (req, res) => {
    Tour.find().then(val => {
        res.status(200).json({
            status: 'success',
            results:val.length,
            requestedAt: req.requestTime,
            data: {
                val
            }
        })
    })
    
}

exports.getTour = (req, res) => {
    Tour.findById(req.params.id).then(val => {
        res.status(200).json({
            status: 'success',
            // results: tours.length,
            data: {
                tour: val
            }
        })
    }).catch(err => {
        res.status(400).json({
            status: 'fail',
            // results: tours.length,
            message: err.message
        })
    })
}

exports.createTour = (req, res) => {
    console.log(req.body);
    Tour.create(req.body)
        .then(doc => {
            res.status(200).json({
                status: 'success',
                data: {
                    tour: doc
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({
                status: 'fail',
                message: err.message
            })
        })
}

exports.updateTour = (req, res) => {
    Tour.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    }).then(val => {
        res.status(200).json({
            status: 'success',
            data: {
                tour: val
            }
        })
    }).catch(err => {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    })
}

exports.deleteTour = (req, res) => {
    Tour.findByIdAndDelete(req.params.id).then(val =>{
        res.status(204).json({
            status: 'success',
            data: null
        })
    }).catch(err =>{
        res.status(400).json({
            status: 'fail',
            message:err.message,
            data: null
        })
    })    
}