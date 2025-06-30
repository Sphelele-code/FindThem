import React from 'react';
import {useState, useEffect} from 'react';

// i am going to use an api now to load countries
//https://restcountries.com/v3.1/all



//map it now

function CountryList(){

const [countries, setCountries] = useState([]);

useEffect(()=>

{
    fetch('https://restcountries.com/v3.1/all?fields=name')
    .then(res=>res.json())
    .then(data =>{
        const CountryNames = data.map(country => country.name.common);
        setCountries(CountryNames);
        console.log("Fetched countries", CountryNames)
    }).catch(e => 
        console.log("Error fetching country list", e)
    );

}


,[]);

    return(
        <ul>
            {countries.map((country, index) =>(
            <li key={country}>
                {country}
            </li>
           ))}

        </ul>
    )
}
export default CountryList;
