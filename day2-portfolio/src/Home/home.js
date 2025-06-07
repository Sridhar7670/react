import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button'; 
import './home.css';
import 'animate.css';
import myimage from "../components/images/my_image.jpg"
const Home = () => {
  const introLines = [
    "I am a Web Developer.",
    "I am a MERN Stack Developer.",
    "I am a Frontend Developer.", 
    "I am a Full Stack Developer."
  ];
  
  const Actionlines = [
    "Let's build something amazing together!",
    "Come let's connect!",
    "Let's create something awesome!",
    "Let's collaborate on projects!"
  ];
  
  // Define different styles for each line
  const Setstyles = [
    { fontFamily: "'Arial', sans-serif", fontWeight: "bold", color: "#4f46e5" , fontSize:"25px"},
    { fontFamily: "'Georgia', serif", fontStyle: "italic", color: "#1abc9c",fontSize:"25px" },
    { fontFamily: "'Courier New', monospace", textDecoration: "none", color: "#e11d48",fontSize:"25px" },
    { fontFamily: "'Verdana', sans-serif", letterSpacing: "1px", color: "#9333ea" ,fontSize:"25px"}
  ];
  
  const [render_lines, setRender_lines] = useState(0);
  
  useEffect(() => {
    const lines = setInterval(() => {
      setRender_lines((prev) => (prev + 1) % introLines.length);
    }, 5000);
    return () => { clearInterval(lines) };
  }, [introLines.length]);
  
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <div className="home-text">
          <h2 className="animate__animated animate__fadeInDown animate__delay-1s">
            Hello I'm Sridhar Reddy
          </h2>
          <p className="animate__animated animate__fadeIn animate__delay-1-5s rotating-text p1"style={Setstyles[render_lines]}>
          {introLines[render_lines]}
          </p>
          <p className="animate__animated animate__fadeIn animate__delay-2s rotating-text p2" style={Setstyles[render_lines]}
          >{Actionlines[render_lines]}
          </p>
          <div className="button-group animate__animated animate__fadeInUp animate__delay-2-5s ">
            <Button 
              children="Contact Me" 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              size="medium"
              variant='primary'
              
            />
            <Button 
              children="Resume" 
              onClick={() => window.open('https://drive.google.com/file/d/1xW7pfM6LM6B5aGKMx9AdyPo9Xcz_CCtS/view?usp=sharing', '_blank')}
              variant="primary"
              size="medium"
            />
          </div>
        </div>
        <div className="home-image animate__animated animate__fadeInRight animate__delay-1s">
          <img src={myimage} alt="home" className="image-placeholder" />
        </div>

      </div>
    </section>
  );
};

export default Home;