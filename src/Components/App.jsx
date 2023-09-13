import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SearchResults from "./SearchResults";
import Movies from "../Components 2/movies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          {/* <Route path="search" element={<SearchResults />} /> */}
          {/*<Route path="blogs" element={<Blogs />} />*/}
          <Route path="/movies/:id" element={<Movies/>}/>
      </Routes>
    </BrowserRouter>
  );
}