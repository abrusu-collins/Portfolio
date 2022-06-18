import "../styles/mail.css";

function Mail() {
    return ( 


        <div className="mail">
            <h1>Get In Touch</h1>

           <div className="meet">

       {/* <div className="mail">
        <h3>Want to collaborate or have any questions</h3>
        <a href="">Say Hello</a>
       </div>
        <div className="meeting">
            <h3>Easiest way to do that is to book a free 30-minute call, whether it’s to just chat about design or your business, i’m all for it!</h3>
            <a href="">Schedule a meeting</a>
        </div> */}
        <ul>
            <li>
                Want to collaborate on a project?
            </li>
            <li>
                Want  me to work on a project for you?
            </li>
            
            <li>
               Have any questions?
            </li>
            <li>Or you just wanna chat about Development.</li>
        </ul>
        <div className="links">
        <a href="mailto:snillochemingson@gmail.com"> Say Hello <span className="waver"> 👋</span></a>
        <a href="https://calendly.com/snillochemingson/30min">Schedule a Meeting  <span>🤙</span></a>
        </div>
           </div>
        </div>
     );
}

export default Mail;