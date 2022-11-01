import React from "react";
import Film from "./Film";

const Carrousel = (props) => {
  return (
    <div className="carrousel wrapper">
      {props.images.map((x) => {
        return <Film photo={x} />;
      })}
    </div>
  );
};

export default Carrousel;
