const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    // id: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    name: {
        type: String,
        required: [true, '必须提供旅行名称'],
        // unique: true
    },
    duration: {
        type: Number,
        required: [true, '必须提供旅行时长']
    },
    maxGroupSize: {
        type: Number,
        required: [true, '必须提供旅行团人数']
    },
    difficulty: {
        type: String,
        required: [true, '必须提供旅行难度']
    },
    ratingsAverage: {
        type: Number,
        default: 4.5
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: [true, '必须提供旅行价格']
    },
    priceDiscount: Number,
    summary: { //摘要
        type: String,
        trim: true,
        required:[true,'必须提供摘要']
    },
    description:{
        type:String,
        trim:true
    },
    imageCover:{
        type:String,
        required:[true,'必须提供图片']
    },
    images:[String],
    createAt:{
        type:String,
        default:new Date().toLocaleString()
    },
    startDates:[Date]
})
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;