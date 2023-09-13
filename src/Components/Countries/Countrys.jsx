import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countrys = () => {
  const [countrys, setCountrys] = useState([]);
  const [visitedCountrys, setvisitedCountrys] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountrys(data));
  }, []);

  const handelVisitedCountrys = (country) => {
    console.log("addd this to  your visited Country");
    // console.log(country);
    const newVisitedCountries = [...visitedCountrys, country];
    setvisitedCountrys(newVisitedCountries);
  };

  const handelVisitFalgs = (country) => {
    const newFlags = [...visitedFlags, country];
    setVisitedFlags(newFlags);
  };

  return (
    <div>
      <h3>Countrys:{countrys.length}</h3>
      <div>
        <h4>Visited Countries : {visitedCountrys.length}</h4>

        <ul>
          {visitedCountrys.map((country) => (
            <li key={country.cca3}> {country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="falgs">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      <div className="country-container">
        {countrys.map((country) => (
          <Country
            key={country.cca3}
            handelVisitedCountrys={handelVisitedCountrys}
            handelVisitFalgs={handelVisitFalgs}
            Country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countrys;
