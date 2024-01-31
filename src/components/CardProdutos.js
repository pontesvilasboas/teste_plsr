import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardProdutos = ({ product, handleProductClick }) => {
  return (
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
  );
};

export default CardProdutos;