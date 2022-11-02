import React from "react";
import Film from "./Film";

const Carrousel = (props) => {
  return (
    <div className="carrousel wrapper">
      {props.images.map((x, num) => {
        return (
          <div key={num}>
            <Film photo={x} />
          </div>
        );
      })}
    </div>
  );
};

export default Carrousel;
