import {useState , useEffect} from 'react'
import {BiSearch}  from 'react-icons/bi'
import Dash from './dash'
import axios from "axios";


useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }

  function showWeather(position : any) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
  
    const apiKey = "your-api-key-here";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherDescription = data.weather[0].description;
        const temperature = Math.round(data.main.temp - 273.15);
        const city = data.name;
  
        const weatherInfo = document.createElement("div");
        weatherInfo.innerHTML = `
          <h2>Weather in ${city}</h2>
          <p>${weatherDescription}</p>
          <p>Temperature: ${temperature}&deg;C</p>
        `;
  
        document.body.appendChild(weatherInfo);
      })
      .catch(error => {
        console.error("Error fetching weather data: ", error);
      });
  }
  
  function showError(error : any) {
    let errorMessage = "";
  
    switch(error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = "User denied the request for geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        errorMessage = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        errorMessage = "An unknown error occurred.";
        break;
    }
  
    alert(errorMessage);
  }

  return () => {
    
  }
}, [])






function Searchbox() {

  const [cityInput , setCityInput] = useState("")
  //console.log(weatherInput);
  const[weatherData , setWeatherData] = useState<any>({})

  
  const getWeatherData = async (e : any) => {
    e.preventDefault();
  try{
    const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=eb9dea318b3347feb5a111844231602&q=${cityInput}&days=10&aqi=yes&alerts=no`)
    .then((res) => {
      setWeatherData(res.data)
      console.log(res.data)
      
    })
  }
  catch(error : any){
    alert('enter the right pace name')
  }
    
  };

  
  
  
 
  return (
    
    <div id="search_bar" className=" pl-8 pt-6 bg-slate-200 " >
    <form className="w-80 py-2 bg-blue-300 rounded-3xl text-white "> 
     <button className="px-1" onClick={getWeatherData}>
        <BiSearch className='w-10 text-white'/>
      </button>
      <input
       onChange={(event) => {setCityInput(event.target.value);}} 
        className="bg-blue-300  outline-none placeholder-white"
        type="text" 
        placeholder="Search"
        />
    </form>
    
    
    {<Dash data={weatherData} />}
    
   

    </div>

   
  
  )
}

export default Searchbox
