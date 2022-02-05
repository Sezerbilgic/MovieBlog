import React from "react";
import Button from "../../UI/button";
import PosterBox from "../../UI/posterBox";

const SliderContainer = ({ title, data }) => {
  return (
    <div className="slider-container">
      <div className="title-container">
        <h3>{title}</h3>
        <Button className={"button-slider"} />
      </div>
      <div className="slider-box">
        <div className="poster-container">
          {data.map((x) => {
            return <PosterBox image={x.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default SliderContainer;
