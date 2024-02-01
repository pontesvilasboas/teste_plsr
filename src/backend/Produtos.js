const mongoose = require('mongoose');

const produtosSchema = new mongoose.Schema({
  name: String,
  image_url: String,
  type: String,
  price: Number,
  seller: String,
  available_sizes: [String],
  details: String,
  sport: String,
});

const Produto = mongoose.model('products', produtosSchema);

module.exports = Produto;
