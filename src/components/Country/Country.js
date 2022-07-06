import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, capital, flag, population} = props.country;
    //console.log(props.country)
    return (
        <div className="country">
            <h2>Country:{name}</h2>
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
            <img className="flag" src={flag} alt="" />
            
            
            
            
        </div>
    );
};

export default Country;