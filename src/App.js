import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import data from './data/data.json';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import SelectFiltro from './components/SelectFiltro';
import CardProdutos from './components/CardProdutos';
import ModalProduto from './components/ModalProduto';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const filteredProducts = data.filter((product) => {
    return filterCategory === '' || product.sport === filterCategory;
  });

  return (
    <div>
      <Navbar />
      <SelectFiltro handleFilterChange={handleFilterChange} />

      <Container className="product-grid">
        <Row>
          {filteredProducts.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <CardProdutos product={product} handleProductClick={handleProductClick} />
            </Col>
          ))}
        </Row>
      </Container>

      {showModal && <ModalProduto showModal={showModal} handleModalClose={handleModalClose} selectedProduct={selectedProduct} />}
    </div>
  );
}

export default App;
