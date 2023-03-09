import Searchbox from '../components/navbar'
import Forecast from  '../components/forecast'
import weatherData from '../components/navbar'

export default function Home() {
  

  return (

  <div>
  
     <header>
      <nav>
        <Searchbox />
        <a href='/forecast'>Forecast</a>
    
      </nav>
   </header> 
   </div>
  )
}
