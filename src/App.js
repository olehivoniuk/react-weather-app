import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity= "New York"/>
   
    <footer>
      This project  is
    <a href="https://github.com/olehivoniuk/react-weather-app" 
    target="_blank" rel="noreferrer">  open-sourced</a>
    </footer>
    </div>
    </div>
  );
}

export default App;
