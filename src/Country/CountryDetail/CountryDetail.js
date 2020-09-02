import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const CountryDetail = () => {
    const {countryDetail} = useParams();
     const [country,setCountry]= useState([])
    useEffect(() => {
        const url=`https://restcountries.eu/rest/v2/name/${countryDetail}`
        fetch(url)
        .then(res => res.json())
        .then( data => setCountry(data[0]))
        
     },[])

    return (
        <div>
            <h3>Country Detail of {countryDetail} </h3>
            <p>Name: {country.name}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population}</p>
            <p>Code: {country.numericCode}</p>
            <p>Native name: {country.nativeName}</p>
            

        </div>
       
    );
};

export default CountryDetail;