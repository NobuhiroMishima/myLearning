import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import { useMovies, useDispatchMovies } from "../contexts/MovieContext";
import { useEffect, useState } from "react";
import moviesApi from "../api/movies.mjs";

const Movies = () => {
  const movies = useMovies();
  const dispatch = useDispatchMovies();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMovies = async (_page) => {
    const res = await moviesApi.getMoviesByPage(_page);
    dispatch({ type: "movie/page", payload: res });
    if (res.length < 12) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, []);

  const loadMoreMovies = () => {
    const nextPage = page + 1;
    fetchMovies(nextPage);
    setPage(nextPage);
  };

  return (
    <>
      <h1 className="movies">学習した動画一覧</h1>
      <InfiniteScroll
        dataLength={movies.length}
        next={loadMoreMovies}
        hasMore={hasMore}
        loader={<h4 className="loading">Loading...</h4>}
        endMessage={<h4 className="loading end">すべてのコンテンツが表示されました。</h4>}
      >
      <div className="movies__cards">
        {movies.map((movie) => (
          <Card movie={movie} key={movie._id}/>
        ))}
      </div>
      </InfiniteScroll>
    </>
  );
};

export default Movies;
