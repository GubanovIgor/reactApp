import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Auth() {
  return (
    <>
      <p>Войдите или зарегистрируйтесь</p>
      <input placeholder='login'></input>
      <input placeholder='password'></input>
      <Button variant="contained" color="primary">Войти</Button>
      <Link to='/registration'><Button variant="contained" color="primary">Зарегистрироваться</Button></Link>
    </>
  );
}

export default Auth;