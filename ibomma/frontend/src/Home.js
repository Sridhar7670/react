import React, { useEffect, useState, useCallback } from 'react';
import Details from "./Details";
import axios from 'axios';
import Search from './Search';
import "./App.css";

const Home = ({ showSearch }) => {
  const [movies, setFilteredMovies] = useState([]);
  const [loading, setloading] = useState(true);
  console.log("i am rendered ")
  useEffect(() => {
    axios.get("http://localhost:5000/all")
      .then((res) => {
        setFilteredMovies(res.data);
        setloading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // Memoize the handleSearch function
  const handleSearch = useCallback((title) => {
    if (title === "") {
      axios.get("http://localhost:5000/all")
        .then((res) => setFilteredMovies(res.data))
        .catch((err) => console.log(err.message));
    } else {
      axios.get(`http://localhost:5000/search/${title}`)
        .then((res) => setFilteredMovies(res.data))
        .catch((err) => console.log(err.message));
    }
  }, []); 

  return (
    <div>
      {showSearch && <Search onSearch={handleSearch} />}

      {loading ? (
        <div className="loading-screen">
          <h2>Movies are being loaded...</h2>
        </div>
      ) : (
        <div className="main-content">
          <div className="card-grid">
            {movies.length === 0 ? (
              <div className="not-found">
                <h1>SORRY</h1>
                <p>We couldn't find that movie</p>
                <p>Try searching again or go to the <a href="/">home page</a>.</p>
              </div>
            ) : (
              movies.map((item, ind) => (
                <Details item={item} key={ind} />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Home);
