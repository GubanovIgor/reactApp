import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// const request = () => {
//   axios.get('http://localhost:3001/')
//   .then(function (response) {
//     console.log(response);
//   })
// }

const request = () => {
  axios({
    method: 'post',
    url: 'http://localhost:3001/',
    data: {
      firstName: 'Finn',
      lastName: 'Williams'
    },
  })
  .then(function(response) {
    console.log(response)
  })
}

function App() {
  return (
    <>
      <p>{request}</p>
      <button onClick={() => request()}>Нажми меня</button>
    </>
  );
}

export default App;
