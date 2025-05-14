import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Context from './Context';
const Details = ({item}) => {
  const {profiledata,setProfiledata}=useContext(Context)
  const fun1=()=>{
    setProfiledata(item)
    navigate(`/search/${item.name}`)
  }
  const navigate = useNavigate();
  return (
    <div className="profile-card" onClick={fun1}>
      <img src={item.image} alt={item.name} className="profile-img" />
      <div className="profile-footer">
        <span className="name-age">{item.name}, {item.age}</span>
        <span className="material-symbols-outlined heart-icon">favorite</span>
      </div>
    </div>
  )
}

export default Details