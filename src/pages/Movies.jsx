
import Card from "../components/Card";
import { useMovies } from "../contexts/MovieContext";

const Movies = () => {
  const movies = useMovies();

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
