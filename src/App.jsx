import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import Header from "./components/Header";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import NewMovie from "./pages/NewMovie";
import Analytics from "./pages/Analytics";

function App() {

  return (
    <BrowserRouter>
      <MovieProvider>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Analytics />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<Movie />} />
            <Route path="/new" element={<NewMovie />} />
          </Routes>
        </div>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
