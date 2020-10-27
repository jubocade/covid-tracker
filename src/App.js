import React, {useState, useEffect} from 'react';
import './App.css';
import Infected from './components/Infected';
import Recovered from './components/Recovered';
import Deaths from './components/Deaths';
import Search from './components/Search';
import Logo from './images/logo.png';
import BarChart from './components/BarChart';
import swal from 'sweetalert';

function App() {
  const [query, setQuery] = useState('');
  const [numberInfected, setNumberInfected] = useState('');
  const [numberRecoveries, setNumberRecoveries] = useState('');
  const [numberDeaths, setNumberDeaths] = useState('');
  const [time, setTime] = useState('');
  
  const getData = () => {
    fetch(`https://covid19.mathdro.id/api/${query}`) 
   .then(res => res.json())
   .then(data => {
    setNumberInfected(data.confirmed.value);
    setNumberRecoveries(data.recovered.value);
    setNumberDeaths(data.deaths.value);
    let date = new Date(data.lastUpdate);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();

        if (dt < 10) {
        dt = '0' + dt;
      }
        if (month < 10) {
        month = '0' + month;
      }

      setTime(`${dt}/${month}/${+year}`); 
   })
   .catch(error => {
    setQuery('');
     setTimeout(() => {
      swal('This country is not found in the database, try another country.')
     }, 700);
   })
}

  useEffect(() => {
    getData();
  }, [query])


  return (
    <div className="App">
      <div className="image"><img src={Logo} alt=""/></div>
      <div className="cards">
          <Infected numberInfected={numberInfected} time={time}/>
          <Recovered numberRecoveries={numberRecoveries} time={time}/>
          <Deaths numberDeaths={numberDeaths} time={time} />
      </div>
        <div className="search-box">
          <Search setQuery={setQuery} query={query}/>
        </div>
      <div className="chart">
          <BarChart numberInfected={numberInfected} numberRecoveries={numberRecoveries} numberDeaths={numberDeaths} query={query} />
      </div>
    </div>
  );
}

export default App;
