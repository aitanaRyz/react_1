import logo from './logo.svg';
import './App.css';
import Manual from './componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p className="nombre-manual">
          Manual De Ensamblador 
        </p>

        <Manual> </Manual>
      </header>
    </div>
  );
}

export default App;
