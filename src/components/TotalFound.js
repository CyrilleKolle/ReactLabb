import { useState, useEffect } from "react";
import { useContext } from "react";
import TotalContext from "../components/ToTalContext";

function TotalFound() {
  const word = useContext(TotalContext);
  const [bikes, setBikes] = useState([]);
  const [total, setTotal] = useState(0);
  //const [searched, setSearched] = useState([])
  console.log(word);
  function handleClick() {
    fetch("http://api.citybik.es/v2/networks")
      .then((response) => response.json())
      .then((result) => {
        //console.log(result);
        setBikes(result.networks);
      });
  }
  function handleTotal() {
    // bikes.map((bike) => {
    // return bike.location.city === word
    //   ? setTotal(total.concat(bike.location.city))
    //   : setTotal(0);
    setTotal(bikes.filter((bike) => bike.location.city === word).length);
    console.log(total);
    // });
  }

  useEffect(() => {
    handleClick();
  }, []);
  useEffect(() => {
    handleTotal();
  });

  return (
    <div>
      {total}{" "}
      <span>
        {total > 1 ? "items matched your search" : "item matched your seach"}
      </span>
    </div>
  );
}

export default TotalFound;
