import { useState, useEffect } from "react";
import { useContext } from "react";
import BikeContext from "../components/BikeContext";

function FetchComponent() {
  const [bikes, setBikes] = useState([]);
  function handleClick() {
    fetch("http://api.citybik.es/v2/networks")
      .then((response) => response.json())
      .then((result) => {
        setBikes(result.networks);
      });
  }

  useEffect(() => {
    handleClick();
  }, []);

  const word = useContext(BikeContext);

  return (
    <div>
      {bikes && (
        <ol className="tilesWrap">
          {bikes.map((bike) =>
            bike.location.city === word ? (
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
            ) : (
              <div></div>
            )
          )}
        </ol>
      )}
    </div>
  );
}

export default FetchComponent;
