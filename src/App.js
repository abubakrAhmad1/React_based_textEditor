import logo from './logo.svg';
import './App.css';
import Display from './components/Display'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with abubakar
        </a>
      </header>
    </div>

      );
}

export default App;
