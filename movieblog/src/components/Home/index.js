import React, { useEffect } from "react";
import Trend from "./TrendMovie/Trend";
import { useDispatch, useSelector, connect } from "react-redux";
import { getMovies, getTrendMovie } from "../../redux/actions/actions";

const Home = () => {
  const movies = useSelector((state) => state.data.movies);
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    _getMovies();
  }, []);

  useEffect(() => {
    if (movies[0]) {
      getMostTrendMovie(movies[0].id);
    }
  }, [movies]);

  const _getMovies = () => {
    dispatch(
      getMovies(
        { key: "movie/popular", params: { language: "tr-TR" } },
        "GET_POPULAR"
      )
    );
  };

  const getMostTrendMovie = (id) => {
    if (id) {
      dispatch(
        getTrendMovie(
          { key: `movie/${id}`, params: { language: "tr-TR" } },
          "GET_MOST_TREND"
        )
      );
    }
  };

  return (
    <>
      <Trend movie={movie} />
      <div style={{height: 750, background: "black"}}>

      </div>
    </>
  );
};

export default connect(null, null)(Home);
