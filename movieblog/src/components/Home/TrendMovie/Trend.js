import React, { useState } from "react";
import config from "../../../apiConfig/config";
import Button from "../../UI/button";
import { useHistory } from "react-router-dom";

const Trend = ({ movie }) => {
  const [card,setCard] = useState(false);
  let history = useHistory();
  const removeMovieCard = () => {
    if(window.innerWidth < 1200){
      setCard(true);
    }else{
      setCard(false);
    }
  }
  window.addEventListener("resize",removeMovieCard);

  const handleClick = () => {
    history.push("/detail");
  }

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
