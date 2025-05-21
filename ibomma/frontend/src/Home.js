import  { useEffect, useState } from 'react'
import Details from "./Details"
import axios from 'axios';
import Search from './Search';
import "./App.css"

// const movies=[ {
//       "_id": 1,
//       "movieName": "Baahu",
//       "director": "S.S. Rajamouli",
//       "cast": ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
//       "description": "A warrior prince rises to reclaim his kingdom.",
//       "ratingIMDB": "8.1",
//       "img": "https://dummyimage.com/200x300/000/fff&text=Baahubali",
//       "genere": "Action, Drama",
//       "releaseYear": 2015,
//       "language": "Telugu",
//       "age":24
//     },
//     {
//       "_id": 2,
//       "movieName": "DAN",
//       "director": "Nitesh Tiwari",
//       "cast": ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra"],
//       "description": "A father trains his daughters to become wrestling champions.",
//       "ratingIMDB": "8.4",
//       "img": "https://dummyimage.com/200x300/000/fff&text=Dangal",
//       "genere": "Biography, Drama",
//       "releaseYear": 2016,
//       "language": "Hindi",
//       "age":24
//     },
//     {
//       "_id": 3,
//       "movieName": "RRR",
//       "director": "S.S. Rajamouli",
//       "cast": ["Ram Charan", "Jr. NTR", "Alia Bhatt"],
//       "description": "Two revolutionaries fight against British rule.",
//       "ratingIMDB": "8.5",
//       "img": "https://dummyimage.com/200x300/000/fff&text=RRR",
//       "genere": "Action, Drama",
//       "releaseYear": 2022,
//       "language": "Telugu",
//       "age":24
//     },{
//       "_id": 1,
//       "movieName": "Baahu",
//       "director": "S.S. Rajamouli",
//       "cast": ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
//       "description": "A warrior prince rises to reclaim his kingdom.",
//       "ratingIMDB": "8.1",
//       "img": "https://dummyimage.com/200x300/000/fff&text=Baahubali",
//       "genere": "Action, Drama",
//       "releaseYear": 2015,
//       "language": "Telugu",
//       "age":24
//     },{
//       "_id": 1,
//       "movieName": "Baahu",
//       "director": "S.S. Rajamouli",
//       "cast": ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
//       "description": "A warrior prince rises to reclaim his kingdom.",
//       "ratingIMDB": "8.1",
//       "img": "https://dummyimage.com/200x300/000/fff&text=Baahubali",
//       "genere": "Action, Drama",
//       "releaseYear": 2015,
//       "language": "Telugu",
//       "age":24
//     },{
//       "_id": 1,
//       "movieName": "Baahu",
//       "director": "S.S. Rajamouli",
//       "cast": ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
//       "description": "A warrior prince rises to reclaim his kingdom.",
//       "ratingIMDB": "8.1",
//       "img": "https://dummyimage.com/200x300/000/fff&text=Baahubali",
//       "genere": "Action, Drama",
//       "releaseYear": 2015,
//       "language": "Telugu",
//       "age":24  
//     }]
const Home = ({ showSearch }) => {
  const [movies, setFilteredMovies] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/all")
      .then((res) => {
        setFilteredMovies(res.data);
        setloading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleSearch = (title) => {
    if (title === "") {
      axios.get("http://localhost:5000/all")
        .then((res) => setFilteredMovies(res.data));
    } else {
      axios.get(`http://localhost:5000/search/${title}`)
        .then((res) => setFilteredMovies(res.data));
    }
  };

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

export default Home;

