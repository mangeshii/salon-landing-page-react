import "./Footer.css";
import {FaGreaterThan} from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer row">
                <div className="col-md-4 betty-footer ">
                    <h1>Betty</h1>
                    <h6>
                        <i>Center of Beauty</i>
                    </h6>
                    <p>Beauty the nunc bibe endum in finibus elit the solli citudin elit.</p>
                </div>
                <div className="col-md-8">
                    <div className="row row-cols-1 row-cols-md-4 row-cols-lg-4 ">
                        <div className="col">
                            <div className="p-0 footer-link">
                                <h5>Useful Links</h5>
                                <ul>
                                    <li><FaGreaterThan className="greater-than"/> Massages</li>
                                    <li><FaGreaterThan className="greater-than"/> Hairdressing</li>
                                    <li><FaGreaterThan className="greater-than"/>Aromatherapy</li>
                                    <li><FaGreaterThan className="greater-than"/> Body Treatments</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-0 info">
                                <h5>Get in touch</h5>
                                <hr />
                                <ul>
                                    <li>+1203-123-0606</li>
                                    <li>hello@betty.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-0 info">
                                <h5>Location</h5>
                                <hr />
                                <ul>
                                    <li>525 West Ave,CT 06850</li>
                                    <li>Connecticut—Norwalk</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-0 info">
                                <h5>Work Hours</h5>
                                <hr />
                                <ul>
                                    <li>Mon-Fri: 08.00-19.00</li>
                                    <li>Sunday:Closed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
