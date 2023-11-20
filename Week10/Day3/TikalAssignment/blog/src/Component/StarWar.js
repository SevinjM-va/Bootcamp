import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2"; 

const StarWars = (props) => {
  const [pilotName, setPilotName] = useState("");
  const [vehName, setVehName] = useState([]);
  const [homeWName, setHomeWName] = useState([]);
  const [homeWPop, setHomeWPop] = useState([]);

  useEffect(() => {
    function fetching() {
      const fetchData = fetch("https://swapi.dev/api/people")
        .then((data) => data.json())
        .then((data) => {
          const findVeh = data.results.filter(
            (item) => item.vehicles.length > 0
          );
          const pilotName = findVeh.map((pilot) => pilot.name);
          setPilotName(pilotName);
          fetching2(findVeh);
        });
    }
    function fetching2(findVeh) {
      if(!vehName.includes(findVeh)){
      findVeh.map((item) =>
        item.vehicles.map((item) => {
          fetch(item)
            .then((data) => data.json())
            .then((data) => {
              const vehicleName = data.name;
              setVehName((vehName) => [...vehName, vehicleName]);
            });
        })
      );
      fetching3(findVeh);
    }}
    function fetching3(findVeh) {
      findVeh.map((item) => {
        fetch(item.homeworld)
          .then((res) => res.json())
          .then((data) => {
            setHomeWName((homeWName) => [...homeWName, data.name]);
            setHomeWPop((homeWPop) => [...homeWPop, data.population]);
          });
      });
    }
    fetching();
  }, []);

  console.log("pilotName", pilotName);
  console.log("vehName", vehName);
  console.log("homeWName", homeWName);
  console.log("homeWPop", homeWPop);

  let num = 0; /* ??? */
  return (
    <div>
    <table>
      <tbody>
        <tr className="desc">
          Vehicle name with the largest sum
          <td>{vehName}</td>
        </tr>
        <tr>
          Related home planets 
          <td>{homeWName}</td>;
        </tr>
        <tr>
          Related their respective population
          <td>{homeWPop}</td>;
        </tr>

        <tr>
          Related pilot names
            <td>{pilotName}</td>;
        </tr>
      </tbody>
    </table>

    <bar data={{
      /* ??? */
    }}>
    </bar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  info: state,
});
export default connect(mapStateToProps)(StarWars);
