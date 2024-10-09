import logo from './bnb.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deploy automático na Netlify e no GitHub Pages!!!
        </p>

        <a
          className="App-link"
          href="https://hcode.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda DevOps
        </a>
      </header>
    </div>
  );
}

export default App;
