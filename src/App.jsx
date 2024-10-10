import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/detail" element={<Movie />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
