import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useInput } from '../hooks/input-hook';
import axios from 'axios';

function Registration() {
  const { value: login, bind: bindLogin, reset: resetLogin } = useInput('');
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword
  } = useInput('');
  const {
    value: repeatPassword,
    bind: bindRepeatPassword,
    reset: resetRepeatPassword
  } = useInput('');

  const registration = () => {
    axios({
      method: 'post',
      url: 'http://localhost:3001/user',
      data: {
        login: login,
        password: password,
      }
    }).then(function(response) {
      console.log(response);
    });
  };

  return (
    <>
      <p>Войдите или зарегистрируйтесь</p>
      <input placeholder="login" {...bindLogin}></input>
      <input placeholder="password" {...bindPassword}></input>
      <input placeholder="repeat password" {...bindRepeatPassword}></input>
      <Button
        variant="contained"
        color="primary"
        onClick={() => registration()}
      >
        Зарегистрироваться
      </Button>
    </>
  );
}

export default Registration;
