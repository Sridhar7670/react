import  { useContext } from 'react';
import './ProfileDetail.css'; 
import Context from './Context';

const ProfileDetail = () => {
  const {profiledata :profile}=useContext(Context)

  // Dummy data for now — replace this with API call
  // const profile = {
  //   name: 'Felora Edword',
  //   age: 23,
  //   address: '4517 Washington Ave.',
  //   relationshipStatus: 'Single',
  //   bio: "I'm very simple girl. Simplicity is my attitude. I think it's personality of a man",
  //   interests: ['Relaxing', 'Reading', 'Nature', 'Makeup', 'Honesty'],
  //   image: 'https://dummyimage.com/200x300/000/fff&text=Baahubali', // Replace with real image
  // };
  // useEffect(()=>{
  //   axios.get(`http://localhost:5000/search/${movieName}`).then((res)=>{console.log(res)})
  // })

  return (
    <div className="profile-detail">
      <div className='profile'>
        <img src={profile.image} alt={profile.name} className="profile-image" width="100%"/>
        <div className="icon-group">
          <span className="heart-icon">❤️</span>
          <span className="star-icon">⭐</span>
        </div>
      </div>

      <div className="profile-content">
       <div style={{display:"flex"}}>
        <div style={{display:"flex",flexDirection:"column"}}> <h2 className="name">{profile.name}, {profile.age}</h2>
        <p className="address">📍 {profile.address}</p>
        </div>
        <span className="status">{profile.relationshipStatus}</span>

       </div>
        <div className="about">
          <h3>About me</h3>
          <p>{profile.bio} <span className="see-more">See more</span></p>
        </div>

        <div className="interests">
          <h3>Interests</h3>
          <div className="tags">
            {profile.interests.map((interest, index) => (
              <span key={index} className="tag">{interest}</span>  
            ))}
          </div>
        </div>
      </div>

      <button className="chat-button">Chat Now</button>
    </div>
  );
};

export default ProfileDetail;
