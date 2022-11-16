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
    res.status(200).json({
        status: 'success',
        results: tours.length,
        requestedAt: req.requestTime,
        data: {
            tours
        }
    })
}
exports.getTour = (req, res) => {
    const id = Number(req.params.id)
    const tour = tours.find(val => val.id === id);
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tour,
        }
    })
}
exports.createTour = (req, res) => {
    console.log(req.body);
    Tour.create(req.body)
        .then(doc => {
            res.status(200).json({
                status:'success',
                data:{
                    tour:doc
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({
                status:'fail',
                message:err.message
            })
        })
    
}
exports.updateTour = (req, res) => {
    const tours = JSON.parse(fs.readFileSync(path));
    const tour = tours.find(val => val.id === req.params.id * 1);
    const keyArr = Object.keys(req.body);
    const valArr = Object.values(req.body);
    for (let i = 0; i < keyArr.length; i++) {
        tour[keyArr[i]] = valArr[i];
    }
    const num = tours.findIndex(val => val.id === req.params.id * 1);
    tours.splice(num, 1, tour);
    fs.writeFile(path, JSON.stringify(tours), err => {
        if (err) return err;
        console.log(123123);
        res.status(200).json({
            status: 'Updated',
            data: {
                tour
            }
        })
    })
}
exports.deleteTour = (req, res) => {
    const tours = JSON.parse(fs.readFileSync(path));
    const tour = tours.find(val => val.id === Number(req.params.id));
    const newTours = tours.filter(val => val.id !== Number(req.params.id));
    fs.writeFile(path, JSON.stringify(newTours), err => {
        if (err) return err;
        res.status(204).json({
            status: 'success',
            results: tours.length,
            data: null
        })
    })
}