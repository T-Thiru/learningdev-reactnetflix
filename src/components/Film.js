import React from "react";

const Film = (props) => {
  return (
    <div className="photos">
      <img className="photos" src={props.photo} alt="" />
    </div>
  );
};

export default Film;
