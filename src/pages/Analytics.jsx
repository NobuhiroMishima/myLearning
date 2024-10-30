
import { useDispatchMovies, useMovies } from "../contexts/MovieContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moviesApi from "../api/movies.mjs";
import Graph from "../components/Graph";
import Topic from "../components/Topic";


const Analytics = () => {
  const movies = useMovies();
  const dispatch = useDispatchMovies();


  useEffect(() => {
    const fetchAllMovies = async () => {
      const res = await moviesApi.getAll();
      dispatch({ type: "movie/init", payload: res });
    };
    fetchAllMovies();
  }, []);

  return (
    <div className="analytics">
      <Topic movies={movies} />
      <Graph movies={movies} />
      <Link className="btn green show-movies" to="/movies">
          動画一覧を見る
      </Link>
    </div>
  );
};

export default Analytics;
