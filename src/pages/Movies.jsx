import { useEffect, useState } from "react";
import moviesApi from "../api/movies";
import Card from "../components/Card";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await moviesApi.getAll();
      setMovies(res);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h1 className="movies">学習した動画一覧</h1>
      <div className="movies__cards">
        {movies.map((movie) => (
          <Card movie={movie} key={movie._id}/>
        ))}
      </div>
    </>
  );
};

export default Movies;
