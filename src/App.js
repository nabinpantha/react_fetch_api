
import './App.css';
import './FetchUser'

import Routes from './Routes'
import history from './history';

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
        <Routes />
        <button  onClick={() => history.push('/FetchUser')} target="_blank">Fetch Random User</button>
       
      </header>
     
    </div>
  );
}

export default App;
