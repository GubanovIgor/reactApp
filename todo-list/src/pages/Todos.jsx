import React from 'react';
import Button from '@material-ui/core/Button';

function Todos() {
  return (
    <>
      <p>Ваши todos</p>
      <Button variant="contained" color="primary">Добавить todo</Button>
    </>
  );
}

export default Todos;