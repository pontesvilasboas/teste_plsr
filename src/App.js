import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import axios from 'axios';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5800/products')
      .then(response => {
        setProdutos(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter dados da API:', error);
      });
  }, []);

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

  const filteredProducts = produtos.filter((product) => {
    return filterCategory === '' || product.sport === filterCategory;
  });

  return (
    <div>
      <Navbar />
      <div className="filter-container">
      <Form.Control
        as="select"
        onChange={handleFilterChange}
        style={{ width: '50%', margin: '0 auto' }}
      >
        <option value="">Todos</option>
        <option value="Futebol">Futebol</option>
        <option value="Basquete">Basquete</option>
        <option value="Corrida">Corrida</option>
      </Form.Control>
    </div>

      <Container className="product-grid">
        <Row>
          {filteredProducts.map((product, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Card className="product-card h-100">
      <div className="card-image-container">
        <Card.Img className="card-image" variant="top" src={product.image_url} />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Preço: R${' '}
          {new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(product.price)}
        </Card.Text>
        <Button variant="primary" onClick={() => handleProductClick(product)}>
          Detalhes
        </Button>
      </Card.Body>
    </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {showModal && <Modal show={showModal} onHide={handleModalClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Detalhes do produto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{selectedProduct.name}</h5>
        <p>{selectedProduct.details}</p>
        <h5>Tamanhos disponiveis:</h5>
        <div className="size-cards">
          {selectedProduct.available_sizes.map((size, index) => (
            <Card key={index} className="size-card">
              <Card.Body>{size}</Card.Body>
            </Card>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>}
    </div>
  );
}

export default App;
