const {mongoose, Schema} = require('mongoose');

const productsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("products", productsSchema);