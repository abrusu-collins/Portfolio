import gif from "./working.gif";
import wave from "./Wave.png";
import twitter from "./Twitter.svg";
import linkedin from "./LinkedIn.svg";

import "../styles/hero.css";
function Hero() {
    
 
    return (
    <div className="hero" >
<div className="about">
<div className="flex1">
    <div>Hello <img src={wave} alt="wave" className="wave"/></div>
<p>I am <span className="name">ABRUSU COLLINS</span></p>
<p>A Front End Developer</p>
<div className="socials">
<a href="https://www.linkedin.com/in/abrusu-collins-359a4416a/"><img src={linkedin} alt="linkedin" /></a>
<a href="https://twitter.com/devSedem"><img src={twitter} alt="twitter" /></a>
</div>
</div>
<div className="gif flex2"><img src={gif} alt="gif" /></div>
</div>
    </div>  

    );
}

export default Hero;