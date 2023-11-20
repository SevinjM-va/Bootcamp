import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

const ApiKey = "6cd8b0375d15cc0a41fa544a2c84c80d";

const Weather = (props) => {
  // console.log('props',props.info)
  const cityInput = useRef();
  const countInput = useRef();

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [buttonPress, setButtonPress] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const fetching = async () => {
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=6cd8b0375d15cc0a41fa544a2c84c80d`
      );
      const data = await result.json();
      setData(data);
    };
    if (buttonPress) {
      fetching();
      setButtonPress(false);
    }
  }, [buttonPress]);

  const handlySubmit = (e) => {
    e.preventDefault();
    setCity(cityInput.current.value);
    setCountry(countInput.current.value);
    setButtonPress(true);
  };

  console.log("gelendatalar", data);
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container" style={{ width: "100%" }}>
            <div className="">
              <div className="col-xs-5 title-container">
                <div>
                  <h1 className="title-container__title">Weather Finder</h1>
                  <h3 className="title-container__subtitle">
                    Find out temperature, conditions and more...
                  </h3>
                </div>
              </div>

              <div className="col-xs-7 form-container">
                <form onSubmit={handlySubmit}>
                  <input
                    type="text"
                    name="city"
                    ref={cityInput}
                    placeholder="City..."
                  />
                  <input
                    type="text"
                    name="country"
                    ref={countInput}
                    placeholder="Country..."
                  />
                  <button className="form-button">get Weather</button>
                </form>
                {data ? (
                  <div className="weather__info">
                    <h4>
                      Location: {data.name}/{data.sys.country}
                    </h4>
                    <h4>Temperature: {data.main.temp}</h4>
                    <h4>Humidity: {data.main.humidity}</h4>
                    <h4>Condition: {data.weather[0].description}</h4>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  info: state,
});
export default connect(mapStateToProps)(Weather);
