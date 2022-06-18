import "../styles/footer.css";
let date = new Date();
    let year = date.getFullYear();
function Footer() {
    
    return ( 
        <div className="footer">
            <p>Designed and Developed By Collins Abrusu | {year}</p>
        </div>
     );
}

export default Footer;