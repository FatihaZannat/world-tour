import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountry}) => {
    const {name,flags,population, area, cca3} = country
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`country ${visited? 'visited' : 'non-visited'}`}>
          
            <h4 style={{color: visited ? 'purple' : 'white'}}>Country name :{name.common}</h4>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>add visited area</button>
            <br /> <br />
            <button onClick={handleVisited}>visit</button>
            {visited ? 'nice Place' : 'want to go'}
        </div>
    );
};

export default Country;