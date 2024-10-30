import { createContext, useContext, useEffect, useReducer } from "react";
import moviesApi from "../api/movies.mjs";

const MovieContext = createContext();
const MovieDispatchContext = createContext();

const useMovies = () => useContext(MovieContext);
const useDispatchMovies = () => useContext(MovieDispatchContext);

const reducer = (movies, { type, payload }) => {
  switch (type) {
    case "movie/init":
      return payload;
    case "movie/page":
      const uniqueMovies = payload.filter(
        (newMovie) => !movies.some((movie) => movie._id === newMovie._id)
      );
      return [...movies, ...uniqueMovies];
    case "movie/update":
      const updateMovie = movies.filter((movie) => movie._id !== payload._id);
      updateMovie.unshift(payload);
      return updateMovie;
    case "movie/delete":
      return movies.filter((movie) => movie._id !== payload._id);
    case "movie/add":
      return [payload, ...movies];
    default:
      return movies;
  }
};

const MovieProvider = ({ children }) => {
  const [movies, dispatch] = useReducer(reducer, []);

  return (
    <MovieContext.Provider value={movies}>
      <MovieDispatchContext.Provider value={dispatch}>
        {children}
      </MovieDispatchContext.Provider>
    </MovieContext.Provider>
  );
};

export { MovieProvider, useMovies, useDispatchMovies };
