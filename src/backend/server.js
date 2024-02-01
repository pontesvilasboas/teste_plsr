const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Produto = require('./Produtos');

const app = express();
const porta = 5800;

app.use(cors());

mongoose.connect('mongodb://localhost/produtosPontes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/products', async (req, res) => {
  try {
    const products = await Produto.find();
    res.json(products);
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}/products`);
});
