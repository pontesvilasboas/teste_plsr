import React from 'react';
import { Form } from 'react-bootstrap';

const SelectFiltro = ({ handleFilterChange }) => {
  return (
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
  );
};

export default SelectFiltro;