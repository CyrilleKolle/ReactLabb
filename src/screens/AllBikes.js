import { useState, useEffect } from "react";
import "../App.css";
import HintComponent from "../components/HintComponent";

function AllStrains() {
  const [bikes, setBikes] = useState([]);
  const [isOpened, setIsOpened] = useState(false);

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

  function handleToggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

  return (
    <div>
      <div>
        <div className="box">
          <div className="boxTitle" onClick={handleToggle}>
           Click for about Api
          </div>
          {isOpened && (
            <div>
              <div className="boxContent">
                <HintComponent initialValue={"Was this info Useful"} />
              </div>
             
            </div>
          )}
        </div>
      </div>
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
