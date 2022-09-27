import React from "react";

function Countries({ countriesToShow, setCountriesToShow }) {
  // if(countriesToShow.length === 1) return null
// <CountryData countriesToShow={country}/>

  return countriesToShow.map((country) => (
    <div key={country.name.official}>
      {country.name.common} <button onClick={ () => setCountriesToShow([country]) }> Show </button>
      

    </div>
  ));
}

export default Countries;
