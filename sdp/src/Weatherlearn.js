import React, {useState, useEffect} from 'react';
import './Weatherlearn.css';
import {getWeatherData} from './weatherapi';
import {ScaleLoader} from 'react-spinners';

function Weatherlearn() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState('Lahore');
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try{
        setLoading(true);
        const data = await getWeatherData(city);
        setWeatherData(data);
        setLoading(false);
    }catch(error) {
      console.log(error.message);
      setLoading(false);
    }
  }
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  `;
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="weatherlearn">
  
        <p className="title">Weather Learn</p>
        <div className="search-form">
          <input id="search-box"type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city name"/>
          <button type="button" id="btn" onClick={() => getData()}>Search</button>
        </div>
        {loading ? (
          <div className="loader-container">
            <ScaleLoader
              css={override}
              size={200}
              color= {"#fff"}
              loading= {loading}
              />
          </div>
        ) : (
          <>
          {weatherdata !== null ? (
          <div className="weather-box"style={{textAlign:"center"}}>
            <div className="card">
            <p>Live Weather Condition</p>
            <div className="weather-icon">
              <img className="weatherbk" src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt="imgicon"/>
            </div>
            <p>{weatherdata.weather[0].main}</p>
            <div className="temperature">
              <h1>{parseFloat(weatherdata.main.temp - 273.15).toFixed(1)}&deg;C</h1>
            </div>
            <div className="location-detail">
              <h3><i className="fa fa-street-view"></i>{weatherdata.name} | {weatherdata.sys.country}</h3>
            </div>
            <div className="temperature-range">
              <h6>Min: {parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1)}&deg;C 
              || Max: {parseFloat(weatherdata.main.temp_max - 273.15).toFixed(1)}&deg;C 
              || Humidity: {weatherdata.main.humidity}%</h6>
            </div>
            </div>
        </div>
        ) : null}
          </>
        ) }       
      
    </div>
  );
}

export default Weatherlearn;