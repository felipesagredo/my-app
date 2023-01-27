import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShoppingList from './ModuloEjemplo';
import Game from './Tictactoe';
import GaleriaFotos from './GaleriaFotos';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='stand-logo'></div>
      <App />
    <div className='stand-compras'>
      <ShoppingList/>
    </div>
    <div className='stand-game'>
      <Game/>
    </div>
    <div className='stand-fotos'>
      <GaleriaFotos/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
