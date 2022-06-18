import { useEffect } from "react";
import "../styles/navbar.css";

function Navbar() {

    useEffect(()=>{
        var navbar = document.querySelector('.nav')
    
    window.onscroll = function() {
    
      // pageYOffset or scrollY
      if (window.pageYOffset > 10 ) {
        navbar.classList.add('scrolled')
      } else {
        navbar.classList.remove('scrolled')
      }
    }
    
    document.querySelector('.toggler').onclick = () => {
      document.querySelector('.nav').classList.toggle('open');
    };
    })
    return ( 


        <nav className="nav">
                  <div className="container">
                    <a className="nav-item nav-brand" href="#home">COLLINS<span id="dot">.</span></a>
                    <button className="toggler">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                    <div className="nav-collapse">
                      <a className="nav-item nav-link" href="#home">Home</a>
                       <a className="nav-item nav-link" href="#about">Skills</a>
                        <a className="nav-item nav-link" href="#skills">Projects</a>
                        <a className="nav-item nav-link" href="#projects">Experience</a>
                      <a className="nav-item nav-link" href="#contacts">Blog</a>
                      <a className="nav-item nav-link" href="#contacts">Get In Touch</a>

                      
                      
                    </div>
                  </div>
                </nav>
     );
}

export default Navbar;