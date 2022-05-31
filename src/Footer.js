import Logo from "./images/footer_logo.svg";
import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import twitter from "./images/icon-twitter.svg";
import pinterest from "./images/icon-pinterest.svg";
 
export default function Footer(){
    return (
        <>
            <footer className="footer">
                <img src={Logo} alt='#' className ='logo'/>
            <ul>
            <li><a href = '#'>About</a></li>
            <li><a href = '#'>Services</a></li>
            <li><a href = '#'>Projects</a></li>
                </ul>
                <div className= 'socials'>
                <img src = {facebook} alt='facebook'/>
                <img src = {instagram}alt='instagram' />
                <img src = {twitter} alt='twitter'/>
                <img src = {pinterest} alt='pinterest'/>
                </div>
            </footer>

        </>
    )
}