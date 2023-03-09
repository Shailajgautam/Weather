import React, { useState , useEffect } from 'react'

import sunImg from '../assets/sun.png';
import Forecast from './forecast';
import { useRouter } from 'next/router';


export const Dash = (data : any) => { 
     

      const weather = data.data;
      const [tempToggle, setTempToggle] = useState(true);
      //if true C, else F; by default C
      const unit = 'tempToggle'
      useEffect(()=>{

            const value = window.localStorage.getItem(unit)
            if (value!== null) {
                  setTempToggle(JSON.parse(value));
                }
            
      },[])

      useEffect(() =>{

            window.localStorage.setItem('unit' ,JSON.stringify(tempToggle))
            //console.log('tempToggle' , tempToggle)  
                    
       },[tempToggle])
      
      function toggleCF() {
            setTempToggle(!tempToggle);
      }




      return(

      <> 
      <div className='home_container bg-slate-200  pt-6  '>
            <button className="bg-blue-300 rounded-3xl px-3 py-1" onClick={toggleCF}>
                  {tempToggle ? "To Fahrenheit" : " To Celsius"}
            </button>

            <div className="left_temp_details">
                  <div className="right_temp_details flex justify-around  pt-12">
                        <img src={sunImg.src } alt="weather description" className='w-40 h-40 ' />
                  </div>
                  <h2 className="temp pt-8 pl-6 text-3xl">{weather.location.name}</h2>
                  <h3 className="weather_description pl-6 text-2xl">
                  {tempToggle ? weather.current.temp_c + "* C" : weather.current.temp_f + "* F"}
                  </h3>
                  <div className="date_details text-l pl-6 ">
                        <h3>16th February</h3>
                  </div>

                  
            
                  
            </div>
            <div className='pt-6 pr-8'>
            <div className='info-container bg-slate-100 rounded-3xl pt-2 pb-2 px-4 flex-auto '>
                  <div className='pressure-container flex'>
                        <div className="text-container p-1">
                              <p>Pressure</p>
                        </div>
                        <div className="text-container p-1  ">
                              <p>: 3 hpa </p>
                        </div>
                  </div>
                  <div className='visibility-container flex'>
                        <div className="text-container p-1 ">
                              Visibility
                        </div>
                        <div className="text-container p-1 ">
                              : 3 km
                        </div>
                  </div>

                  <div className="air-quality-container flex">
                        <div className="text-container p-1 ">
                              Air-Quality
                        </div>
                        <div className="text-container p-1 ">
                              <p>: 70 </p>
                        </div>
                  </div>

                  <div className="windspeed-container flex">
                        <div className="text-container p-1 ">
                              <p>Wind Speed</p>
                        </div>
                        <div className="text-container p-1">
                              <p>: 3km/h </p>
                        </div>
                  </div>
                  </div>
            </div>
            </div>
            </>    

      )
}

export default Dash

