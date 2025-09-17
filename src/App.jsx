//import { useState } from 'react'
import logoLinkedIn from './assets/LinkedIn.png';
import logoInstagram from "./assets/Instagram.png";
import logoDiscord from "./assets/discordlogo.jpg";
import logoGitHub from "./assets/gitlogo.png";
import picMyself from './assets/myself.jpg';


function App() {

  const handleClick = (event) => {
     event.target.style.opacity = 0.8;
    alert("Loading Social Media Profile..");
  }

  return (
    <>
      <div id="nameAbout">
        <h1>Nikola Dimitrov</h1>

          <p>I’m a 16-year-old from Canada in my final year of highschool. I began my software development journey in 2019 and I plan to study Computer Engineering at Carleton University.</p>     
      </div>

        <div className="picMyself" >  {/* picture of me */}
          <img className="me" src={picMyself} alt="Nik" width="400"></img>
        </div>
        <div className="logoContainer">
            <a href="https://www.linkedin.com/in/nikola-dimitrov-907a30368/" target="_blank" onClick={handleClick}> 
              <img className="logo" src={logoLinkedIn} alt="linkedIn" width="40"/>
            </a>

            <a href="https://www.instagram.com/nikola._.dimitrov/" target="_blank" onClick={handleClick}>
              <img className="logo" src={logoInstagram} alt="Instagram" width="40"/>
            </a>

            <a href="https://discord.com/users/796132802961473606" target="_blank" onClick={handleClick}> 
              <img className="logo" src={logoDiscord} alt="Discord" width="40"/>
            </a>

            <a href="https://github.com/NickLemon11" target="_blank" onClick={handleClick}> 
              <img className="logo" src={logoGitHub} alt="GitHub" width="40"/>
            </a>
          </div>  

      <div className="experience">
        <h1>Experience</h1>
        <p id="exp">Java, Javascript, JQuery, CSS, HTML5 & Python</p>
      </div>

      <div className="education" width="100">
        <h1>Education</h1>
        <p>Currently in Highschool Grade 12, taking advanced functions aswell as calculus and vectors. I also have done online programming tutoring with RP4K and itGenio.</p>
      </div>
    </>
  )
}

export default App
