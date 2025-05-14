import React, { useEffect, useState } from 'react'
import Details from "./Details"
import * as LoadingIcons from 'react-loading-icons';
import axios from 'axios';
// const persons=[ {
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


const Home = () => {
const[persons,setPersons]=useState([])
const [loading,setloading]=useState(true)

useEffect(()=>{
      axios.get("http://localhost:5000/all").then((res)=>{setPersons(res.data);setloading(false)}).catch((err)=>console.log(err.message))
},[])


  
return (
  <div>
    {loading ? (
      <div className="loading-screen">
        <h2 style={{ marginBottom: '20px' }}>Movies are being loaded...</h2>
        <LoadingIcons.SpinningCircles width="60px" height="60px" stroke="#007bff" />
      </div>
    ) : (
      <div className="card-grid">
        {persons.map((item, ind) => (
          <Details item={item} key={ind} />
        ))}
      </div>
    )}
  </div>
);

}

export default Home