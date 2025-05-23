import React, { useEffect, useState, useCallback } from 'react';
import Details from './Details';
import axios from 'axios';
import Search from './Search';
import './App.css';

const Home = ({ showSearch }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10); 
  const countToShow = visibleCount; 
  console.log("i am from home rendered ")
  useEffect(() => {
    axios.get("https://moviesbend.vercel.app/all")
      .then((res) => {
        setAllMovies(res.data);
        setVisibleMovies(res.data.slice(0, countToShow));
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const loadMore = () => {
    const newCount = visibleCount + 10;
    setVisibleCount(newCount);
    setVisibleMovies(allMovies.slice(0, newCount));
  };

const handleSearch = useCallback((title) => {

  if (title === "") {
    axios.get("https://moviesbend.vercel.app/all")
      .then((res) => {
        setAllMovies(res.data);
        setVisibleMovies(res.data.slice(0, countToShow)); 
      });
  } else {
    axios.get(`https://moviesbend.vercel.app/search/${title}`)
      .then((res) => {
        setAllMovies(res.data);
        setVisibleMovies(res.data.slice(0, countToShow)); 
      });
  }
}, [visibleCount]); 


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
            {visibleMovies.length === 0 ? (
              <div className="not-found">
                <h1>SORRY</h1>
                <p>We couldn't find that movie</p>
              </div>
            ) : (
              visibleMovies.map((item, ind) => (
                <Details item={item} key={ind} />
              ))
            )}
          </div>

          {visibleCount < allMovies.length && (
            <button className="load-more-btn" onClick={loadMore}>
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default React.memo(Home);
