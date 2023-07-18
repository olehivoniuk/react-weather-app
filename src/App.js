import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity= "Mew York"/>
   
    <footer>
      This project  was coded by <a href="https://ornate-dodol-f50a44.netlify.app">Bohdana Subotiak </a>{" "} and is
    <a href="https://github.com/olehivoniuk/react-weather-app"
    target="_blank">  open-sourced</a>
    </footer>
    </div>
    </div>
  );
}

export default App;
