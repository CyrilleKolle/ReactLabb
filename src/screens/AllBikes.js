import { useState, useEffect } from "react";
import "../App.css";

function AllStrains() {
  const [bikes, setBikes] = useState([]);

  function handleClick() {
    fetch("http://api.citybik.es/v2/networks")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBikes(result.networks);
      });
  }

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div>
      <div>
        {bikes && (
          <ol className="tilesWrap">
            {bikes.map((bike) => (
              <li key={bike.id}>
                {bike.name}
                <br />
                {bike.location.country}
                <br />
                {bike.location.city}
                <br />
                latitude: {bike.location.latitude}
                <br />
                longitude: {bike.location.longitude}
                <br />
                {bike.company}
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default AllStrains;
