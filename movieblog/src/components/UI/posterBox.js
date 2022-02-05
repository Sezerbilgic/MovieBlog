import React from "react";
import config from "../../apiConfig/config";

const PosterBox = ({image}) => {
  return (
    <div
      className="poster-box"
      style={{
        backgroundImage: `url(${config.originalImage(image)})`,
      }}
    ></div>
  );
};

export default PosterBox;
