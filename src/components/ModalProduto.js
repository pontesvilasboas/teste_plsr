import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

const ModalProduto = ({ showModal, handleModalClose, selectedProduct }) => {
  return (
    <Modal show={showModal} onHide={handleModalClose} centered>
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
    </Modal>
  );
};

export default ModalProduto;