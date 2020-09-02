import React, { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const[countries, setContries]=useState([])
    useEffect(() => {
        const url='https://restcountries.eu/rest/v2/all'
        fetch(url)
        .then(res => res.json())
        .then( data => setContries( data))
    },[])
    return (
        <div>
            <h1> Total Country: {countries.length}</h1>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Home;