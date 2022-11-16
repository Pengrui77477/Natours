const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true, '请输入旅行名称'],
      unique: true
  },
  rating: {
      type: Number,
      default: 4.5
  },
  price: {
      type: Number,
      required: [true, '请输入价格']
  }
})
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;