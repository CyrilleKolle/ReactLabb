const { useState } = require("react");

function HintComponent({ initialValue }) {
  const [mail] = useState("info@citybik.es");
  const [value, setValue] = useState(initialValue);
  // const answers = ["Yes", "No", "Unsure"],
  //   [ans, setAns] = useState(
  //     Object.fromEntries(answers.map((answer) => [answer, false]))
  //   );
  return (
    <div>
      <div>
        Displays CityBikes in cities all over Europe. This work uses API from
        CityBikes. They can be contacted here{": "}
        <a href={"mailto:" + mail}>info@citybik.es</a>.
      </div>
      <div>
        <button
          onClick={() => {
            setValue("Thanks for reading");
          }}
        >
          {value}
        </button>
      </div>
      {/* <div>
          
        {answers.map((color) => (
        <label key={color}>
          <input
            checked={selectedColors[color]}
            name="selectedColors"
            onChange={(event) =>
              setSelectedColors({
                ...selectedColors,
                [color]: event.target.checked,
              })
            }
            type="checkbox"
            value={color}
          />
          {color}
      
        </label>}

      </div> */}
    </div>
  );
}

export default HintComponent;
