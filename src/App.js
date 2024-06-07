import './App.css';
import  profile from './profile.jpg';
import Skills from "./Skills";
function App() {
  return (    
    <div class="container">
  <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      Menu
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects" >Project</a>
    <a href="#contact">Contact me</a>
  </div>
  </div>
    <div class="circular-container">
    <img class="circular-image" src={profile} alt="Circular Image"/>
     </div> 
    <h1 class="neonText" id="home">
         Astha Singh
    </h1>
    <div class="type">
    <h2 class="neon">
      Web Developer || Coder ||Machine learning Enthusiast
    </h2>
    </div>
    <div class="about" id="about">
      <h2 class="neonText">About me</h2>
      <div>
      <p class="para">Hello there! I'm a passionate individual on a journey to master the intricate world of web development and data structures and algorithms. I am currently pursuing by Bachelor's of Technology in Mechanical Engineering from Motilal Nehru National Institute of Technology. My enthusiasm extends beyond web development, as I harbor a keen interest in delving into the realms of machine learning. With a tireless work ethic, I am committed to honing my skills and staying on the cutting edge of technology.</p>
      </div>
    </div>
    <div class="skills" id="skills">
      <h2 class="neon">SKILLS</h2>
      <div className="App">
      <Skills />
    </div>
   </div>
   <div class="projects" id="projects"> 
   <h2 class="neonText">Projects</h2>
   <div class="card-container">
  <div class="panel">
    <div class="ring">
      <div class="card card1"></div>
      <div class="border">
        <p class="title">ABC</p>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="ring">
      <div class="card card2"></div>
      <div class="border">
        <p class="title">Personal Portfolio</p>
      </div>
    </div>
  </div>
  <div class="panel">
    <div class="ring">
      <div class="card card3"></div>
      <div class="border">
        <p class="title">XYZ</p>
        <div class="slide">
        </div>
      </div>
    </div>
  </div>
</div>
   </div>
   <div class="Contactme">
    <h2 class="neon">Contact me</h2>
    <div class="container-button" id="contact">
      <div class="btn fb-btn">
            <i class="fa fa-github" aria-hidden="true" id="fb"></i>
        </div>
        <div class="btn ig-btn">
            <i class="fa fa-instagram" aria-hidden="true" id="ig"></i>
        </div>
        <div class="btn tw-btn">
            <i class="fa fa-linkedin" aria-hidden="true" id="tw"></i>
        </div>
        </div>
   </div>
 </div>
  );
}


export default App;
