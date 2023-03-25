import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './funciones/App';
import ShoppingList from './funciones/ModuloEjemplo';
import Game from './funciones/Tictactoe';
import TodoList from './funciones/TodoList';
import GaleriaFotos from './funciones/GaleriaFotos';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <div>
      <App/>
      <ShoppingList/>
      <Game/>
      <TodoList/>
      <GaleriaFotos/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
