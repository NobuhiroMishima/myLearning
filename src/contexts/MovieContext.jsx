import { createContext, useContext, useEffect, useReducer } from "react";
import moviesApi from "../api/movies";

const MovieContext = createContext();
const MovieDispatchContext = createContext();

const useMovies = () => useContext(MovieContext);
const useDispatchMovies = () => useContext(MovieDispatchContext);

const reducer = (movies, { type, payload }) => {
  switch (type) {
    case "movie/init":
      return payload;
    case "movie/update":
      const updateMovies = movies.filter(movie => (
        movie._id !== payload._id
      ));
      updateMovies.unshift(payload)
      return updateMovies
    default:
      return movies;
  }
};

const MovieProvider = ({ children }) => {
  const [movies, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await moviesApi.getAll();
      dispatch({ type: "movie/init", payload: res });
    };
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={movies}>
      <MovieDispatchContext.Provider value={dispatch}>
        {children}
      </MovieDispatchContext.Provider>
    </MovieContext.Provider>
  );
};

export { MovieProvider, useMovies, useDispatchMovies };
