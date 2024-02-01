const mongoose = require('mongoose');
const Produto = require('./Produtos');
const jsonData = require('./data.json');

mongoose.connect('mongodb://localhost/produtosPontes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function injetarDados() {
  try {
    await Produto.deleteMany({});
    await Produto.insertMany(jsonData);
    console.log('sucesso ao importar os dados');
  } catch (error) {
    console.error('Erro ao importar dados:', error);
  } finally {
    mongoose.disconnect();
  }
}

injetarDados();