import "../styles/Header.css";
//Getting the spotify icon locally.
import spotifyIcon from '../images/spotifyIcon.png';

//This function creates the navigation bar. Currently I am pointing them all to blank pages, because I am only recreating the one web page.
function Navbar() {
    return (
        <nav className="navigation-bar">
            <ul>
                <li>
                    <a href="about:blank" rel="noreferrer" target="_blank" className="main-navigation-item">Premium</a>                
                </li>
                <li>
                    <a href="about:blank" rel="noreferrer" target="_blank" className="main-navigation-item">Support</a>
                </li>
                <li>
                    <a href="about:blank" rel="noreferrer" target="_blank" className="main-navigation-item">Download</a>
                </li>
                <li className="separator"> </li>
                <li>
                    <a href="about:blank" rel="noreferrer" target="_blank" className="secondary-navigation-item">Sign up</a>
                </li>
                <li>
                    <a href="about:blank" rel="noreferrer" target="_blank" className="secondary-navigation-item">Log in</a>
                </li>
            </ul>
        </nav>
    )
    
    
}
//The Header component contains the header banner, which contains the spotify icon and the navigation bar.
function Header() {
    return (
        <div className="full-header">
            <header className="header-banner">
                <div className="brand-box"><img src={spotifyIcon} alt="Spotify icon."></img>Spotify</div>
                <Navbar />
            </header>
        </div>
    )
}

export default Header;