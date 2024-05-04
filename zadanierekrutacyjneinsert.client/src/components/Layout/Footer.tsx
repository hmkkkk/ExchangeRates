import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    library.add(faGithub);

    return (
        <footer id="footer" className="footer container">
            <div>
                <span>ExchangeRates &copy;</span>
                <a className="footer-link" href="mailto:pawel.j.kroczak@gmail.com"> Pawel Kroczak</a>
            </div>
            <div>
                <a href="https://github.com/hmkkkk">
                    <FontAwesomeIcon className="footer-icon" icon={faGithub} />
                </a>                
            </div>
        </footer>
    )
}

export default Footer;