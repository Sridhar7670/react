import { useState } from "react";
import "./App.css";
const movies = [
  {
    id: 1,
    movieName: "Baahubali",
    director: "S.S. Rajamouli",
    cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
    description: "A warrior prince rises to reclaim his kingdom.",
    ratingIMDB: "8.1",
    img: "https://dummyimage.com/200x300/000/fff&text=Baahubali",
    genre: "Action, Drama",
    releaseYear: 2015,
    language: "Telugu"
  },
  {
    id: 2,
    movieName: "Dangal",
    director: "Nitesh Tiwari",
    cast: ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra"],
    description: "A father trains his daughters to become wrestling champions.",
    ratingIMDB: "8.4",
    img: "https://dummyimage.com/200x300/111/fff&text=Dangal",
    genre: "Biography, Drama",
    releaseYear: 2016,
    language: "Hindi"
  },
  {
    id: 3,
    movieName: "RRR",
    director: "S.S. Rajamouli",
    cast: ["Ram Charan", "Jr. NTR", "Alia Bhatt"],
    description: "Two revolutionaries fight against British rule.",
    ratingIMDB: "8.5",
    img: "https://dummyimage.com/200x300/222/fff&text=RRR",
    genre: "Action, Drama",
    releaseYear: 2022,
    language: "Telugu"
  },
  {
    id: 4,
    movieName: "3 Idiots",
    director: "Rajkumar Hirani",
    cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi"],
    description: "Three friends challenge the traditional education system.",
    ratingIMDB: "8.4",
    img: "https://dummyimage.com/200x300/333/fff&text=3Idiots",
    genre: "Comedy, Drama",
    releaseYear: 2009,
    language: "Hindi"
  },
  {
    id: 5,
    movieName: "Pushpa: The Rise",
    director: "Sukumar",
    cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
    description: "The rise of a red sandalwood smuggler.",
    ratingIMDB: "7.6",
    img: "https://dummyimage.com/200x300/444/fff&text=Pushpa",
    genre: "Action, Crime",
    releaseYear: 2021,
    language: "Telugu"
  },
  {
    id: 6,
    movieName: "PK",
    director: "Rajkumar Hirani",
    cast: ["Aamir Khan", "Anushka Sharma", "Sushant Singh Rajput"],
    description: "An alien questions human beliefs and religion.",
    ratingIMDB: "8.1",
    img: "https://dummyimage.com/200x300/555/fff&text=PK",
    genre: "Comedy, Sci-Fi",
    releaseYear: 2014,
    language: "Hindi"
  },
  {
    id: 7,
    movieName: "Kantara",
    director: "Rishab Shetty",
    cast: ["Rishab Shetty", "Sapthami Gowda"],
    description: "A tale of folklore and land conflicts in coastal Karnataka.",
    ratingIMDB: "8.4",
    img: "https://dummyimage.com/200x300/666/fff&text=Kantara",
    genre: "Action, Thriller",
    releaseYear: 2022,
    language: "Kannada"
  },
  {
    id: 8,
    movieName: "Gully Boy",
    director: "Zoya Akhtar",
    cast: ["Ranveer Singh", "Alia Bhatt"],
    description: "A street rapper from Mumbai rises to fame.",
    ratingIMDB: "7.9",
    img: "https://dummyimage.com/200x300/777/fff&text=GullyBoy",
    genre: "Musical, Drama",
    releaseYear: 2019,
    language: "Hindi"
  },
  {
    id: 9,
    movieName: "Vikram",
    director: "Lokesh Kanagaraj",
    cast: ["Kamal Haasan", "Fahadh Faasil", "Vijay Sethupathi"],
    description: "An undercover cop takes down a drug syndicate.",
    ratingIMDB: "8.3",
    img: "https://dummyimage.com/200x300/888/fff&text=Vikram",
    genre: "Action, Thriller",
    releaseYear: 2022,
    language: "Tamil"
  },
  {
    id: 10,
    movieName: "Drishyam",
    director: "Jeethu Joseph",
    cast: ["Ajay Devgn", "Tabu", "Shriya Saran"],
    description: "A man tries to protect his family from a murder investigation.",
    ratingIMDB: "8.2",
    img: "https://dummyimage.com/200x300/999/fff&text=Drishyam",
    genre: "Crime, Drama",
    releaseYear: 2015,
    language: "Hindi"
  },

  // Add 10 more below as needed or let me know if you'd like the next batch.
]

const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const changeText = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch(newValue.trim());
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        className="Searchbar"
        placeholder="Search by Movie title..."
        value={value}
        onChange={changeText}
      />
      <button type="button" onClick={() => onSearch(value)}>Search</button>
    </form>
  );
};

export default Search;
export {movies}
