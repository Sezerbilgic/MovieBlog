import React, { useEffect } from "react";
import Trend from "./TrendMovie/Trend";
import { useDispatch, useSelector, connect } from "react-redux";
import { getMovies, getTrendMovie } from "../../redux/actions/actions";
import SliderContainer from "./SliderContainer/SliderContainer";
import Footer from "../UI/footer";

const Home = () => {
  const movies = useSelector((state) => state.movies.data);
  const series = useSelector((state) => state.series.data);
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    _getMovies();
    _getSeries();
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
        "GET_POPULAR_MOVIES"
      )
    );
  };
  const _getSeries = () => {
    dispatch(
      getMovies(
        { key: "tv/popular", params: { language: "tr-TR" } },
        "GET_POPULAR_SERIES"
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
      <div>
        <SliderContainer title="Trend Filmler" data={movies} />
        <SliderContainer title="Trend Diziler" data={series} />
      </div>
    </>
  );
};

export default connect(null, null)(Home);
