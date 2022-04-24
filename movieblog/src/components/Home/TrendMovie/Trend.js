import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import config from "../../../apiConfig/config";
import Button from "../../UI/button";

const Trend = ({ movie }) => {
  const [card, setCard] = useState(false);
  const [path, setPath] = useState();
  const removeMovieCard = () => {
    if (window.innerWidth < 1200) {
      setCard(true);
    } else {
      setCard(false);
    }
  };
  window.addEventListener("resize", removeMovieCard);

  const handleClick = () => {
    const pathName = `/detail/${movie.id}`;
    setPath(pathName);
  };
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
          <Button className={"button"} onClick={handleClick} />
          {path && <Navigate to={path} replace />}
        </div>
        <div
          className={card ? "movie-card-wrap-responsive" : "movie-card-wrap"}
          style={{
            backgroundImage: `url(${config.originalImage(movie?.poster_path)})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Trend;
