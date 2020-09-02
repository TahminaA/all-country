import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const{name,capital,alpha3Code}=props.country;
    const history= useHistory();
    const countryStyle={
        border:'1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    const handleClick= (country) =>{
        history.push(`/country/${country}`);
         
    }
    return (
        <div style={countryStyle}>
             <h1>Country Name:{name}</h1>
            <p>Country Capital: {capital}</p>
            <p>Country Code: {alpha3Code}</p>
            <button onClick={() =>handleClick(name)}>Show Detail</button>
           
        </div>
    );
};

export default Country;