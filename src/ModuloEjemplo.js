import React from 'react';
import logo from './logo.svg';
import './ModuloEjemplo.css';

class ShoppingList extends React.Component {
    render() {
      return (
        <div className="shopping-list">
          <h1>Sistema de Compras {this.props.name}</h1>
          <ul class="list-social">
            <li>Iniciar sesion</li>
            <li>Registrarse</li>
            <li>Buscar productos</li>
            <li>Buscar publicaciones</li>
          </ul>
          <img src={logo} className="App-logo-sc" alt="logo" />
        </div>
      );
    }
  }
  
  export default ShoppingList;
  // Example usage: <ShoppingList name="Mark" />