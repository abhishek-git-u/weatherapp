import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Mycards from './components/Mycards';
import axios from 'axios';
import WeatherCards from './components/WeatherCards';




function App() {

  
  return (
    <div className="App" >  
      <div class=" m-3 p-3 rounded" >
      <h3 class="text-danger m-10 p-10">
        <u>WEATHER FORECAST APP</u>
      </h3>
      <WeatherCards></WeatherCards>
    </div></div>
  );
}

export default App;

