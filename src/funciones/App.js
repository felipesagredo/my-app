import logo from '../img/logo.svg';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Haciendo uso de /<code>APIs</code> ... 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentación de React
        </a>
        <br></br>
        <img src={logo} className="App-logo-sc" alt="logo" />
      </header>
    </div>
  );
}

export default App;
