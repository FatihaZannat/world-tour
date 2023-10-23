import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './country-container.css'
const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountry, setVisitedCountry] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then (res => res.json())
        .then (data => setCountries(data))
    },[])

    const handleVisitedCountry = country => {
        console.log(country);
        setVisitedCountry([...visitedCountry,country])
    }

    return (
        <div >
            <h2>Countries: {countries.length}</h2>
            <h3>Visited Country : {visitedCountry.length}</h3>
            <ul>{
                visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }</ul>
           <div className="country-container">
           {
                countries.map(country =><Country 
                    key={country.cca3}  
                    handleVisitedCountry={handleVisitedCountry}
                    country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;