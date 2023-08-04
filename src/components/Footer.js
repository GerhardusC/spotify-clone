import '../styles/Footer.css';
// Importing the social media icons. They look slightly different from the live site.
import instagramIcon from '../images/instagramIcon.svg';
import twitterIcon from '../images/twitterIcon.svg';
import facebookIcon from '../images/facebookIcon.svg';
import spotifyIcon from '../images/spotifyIcon.png';

// This function returns the footer which also includes all the icons above. 
// This part will remain quite static, so I built it in one big chunk. Additionally responsive design is not implemented here like in the original.
// There are also no links added at the bottom, they are just simulated for now.
function Footer() {
    return (
        <div>
            <footer>
                <nav className="footer-navigation-block">
                   <div className="brand-box">
                        <img src={spotifyIcon} alt="Spotify icon" />Spotify
                   </div>
                   <div className="bottom-links">
                        <dl className="navigation-data-list">
                            <dt>COMPANY</dt>
                            <dd>About</dd>
                            <dd>Jobs</dd>
                            <dd>For the Record</dd>
                        </dl>
                        <dl className="navigation-data-list">
                            <dt>COMMUNITIES</dt>
                            <dd>For artists</dd>
                            <dd>Developers</dd>
                            <dd>Advertising</dd>
                            <dd>Investors</dd>
                            <dd>Vendors</dd>
                        </dl>
                        <dl className="navigation-data-list">
                            <dt>USEFUL LINKS</dt>
                            <dd>Support</dd>
                            <dd>Web Player</dd>
                            <dd>Free Mobile App</dd>
                        </dl>
                   </div>
                   <div className="footer-social-media-icon-container">
                        <ul className="social-media-icons">
                            <li><img src={instagramIcon} alt="Instagram icon."/></li>
                            <li><img src={twitterIcon} alt="Twitter icon" /></li>
                            <li><img src={facebookIcon} alt="Facebook icon" /></li>
                        </ul>
                   </div>
                   
                </nav>
                    <p className="region-name">South Africa (English)</p>
                    <div className="tiny-bottom-links-container">
                        <div className="tiny-bottom-links">
                                <ul>
                                    <li>Legal</li>
                                    <li>Privacy Center</li>
                                    <li>Privacy Policy</li>
                                    <li>Cookies</li>
                                    <li>About Ads</li>
                                    <li>Accessibility</li>
                                </ul>
                        </div>
                        <p className="copyright-in-the-corner">© 2023 Spotify AB</p>
                   </div>
            </footer>
        </div>
    )
}

export default Footer;