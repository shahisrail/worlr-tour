import { useState } from 'react';
import './Country.css'
const Country = ({ Country, handelVisitedCountrys, handelVisitFalgs }) => {
  const { name, flags } = Country;
  const [Visited, setVisited] = useState(false);
  const handelCLick = () => {
    setVisited(!Visited);
  };
  return (
    <div className={`country ${Visited && "visited"}`}>
      <h3>Name :{name.common} </h3>
      <img style={{ width: "300px" }} src={flags.png} alt="" /> <br /> <br />
      <button onClick={() => handelVisitedCountrys(Country)}>
        Mark visited
      </button>
      <br />
      <button onClick={() => handelVisitFalgs(Country.flags.png)}>flags</button>
      <br />
      <button onClick={handelCLick}> {Visited ? "Visited" : "Going"}</button>
      {Visited ? "   I have visited" : "    I want to visited"}
    </div>
  );
};

export default Country;
