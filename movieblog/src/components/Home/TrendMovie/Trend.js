import React from "react";
import config from "../../../apiConfig/config";
import Button from "../../UI/button";

const Trend = ({ movie }) => {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${config.originalImage(movie?.backdrop_path)})`,
      }}
    >
      <div className="overlay">
        <div className="movie-info">
          <h2>{movie?.title}</h2>
          <p>{movie?.overview}</p>
          <Button />
        </div>
        <div
          className="movie-card-wrap"
          style={{
            backgroundImage: `url(${config.originalImage(movie?.poster_path)})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Trend;
