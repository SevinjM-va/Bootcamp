import React from "react";
import { connect } from "react-redux";

export function BootstrapCard(props) {
  const propsData = props.info.celebrities;
  const propsPlanets = props.info.planets;
  console.log("props", propsData);
  return (
    <div>
      {propsData
        ? propsData.map((item,index) => {
            return (
              <div key={index} className="card m-5" style={{ width: "30rem" }}>
                <img
                  className="card-img-top"
                  src={item.imageUrl}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href={item.buttonUrl} className="btn btn-primary">
                    {item.buttonLabel}
                  </a>
                </div>
              </div>
            );
          })
        : ""}
         <div className="m-5">
        {propsPlanets? propsPlanets.map((item,index)=>{
          return(
              <div className="names" key={index}>{item}</div>
          )
        }):''}
        </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  info: state,
});
export default connect(mapStateToProps)(BootstrapCard);
