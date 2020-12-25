
import './App.css';
import './FetchUser'
import FetchUser from "./FetchUser";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Learning fetching API in react js
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FetchUser/>
      </header>
     
    </div>
  );
}

export default App;
