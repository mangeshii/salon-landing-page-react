import "./Services.css";
import makeup from "../Images/makeup.jpg";
import massage from "../Images/massage.jpg";
import barber from "../Images/barber.jpg";
import body_treatment from "../Images/body-treatment.jpg";
import aromatherapy from "../Images/aromatherapy.jpg";
import hair_dressing from "../Images/hair-dressing.jpg";
import {FiArrowRight} from "react-icons/fi"

const Services = () => {
    return (
        <div className="services-wrapper">
            <div className="services">
                <div className="service-header">
                    <h1>Our Services</h1>
                    <h5>We offer a wide range of beauty services</h5>
                    <div className="hori-line"></div>
                </div>
                <div className="cards-container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-5">
                        <div className="col">
                            <div className="service-img">
                                <img src={makeup} alt="" />
                            </div>
                            <div className="text-cont">
                                <div className="con"><h5>Makeup</h5><FiArrowRight style={{color:"#e52e71",fontSize:'1.2rem'}}/></div>

                            </div>
                        </div>
                        <div className="col">
                            <div className="service-img">
                                <img src={hair_dressing} alt="" />
                            </div>
                            <div className="text-cont">
                                <div className="con"><h5>Hair Dressing</h5><FiArrowRight style={{color:"#e52e71",fontSize:'1.2rem'}}/></div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-img">
                                <img src={barber} alt="" />
                            </div>
                            <div className="text-cont">
                                <div className="con"><h5>Barber</h5><FiArrowRight style={{color:"#e52e71",fontSize:'1.2rem'}}/></div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-img">
                                <img src={massage} alt="" />{" "}
                            </div>
                            <div className="text-cont">
                                <div className="con"><h5>Massage</h5><FiArrowRight style={{color:"#e52e71",fontSize:'1.2rem'}}/></div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-img">
                                <img src={body_treatment} alt="" />
                            </div>
                            <div className="text-cont">
                                <div className="con"><h5>Body Treatment</h5><FiArrowRight style={{color:"#e52e71",fontSize:'1.2rem'}}/></div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="service-img">
                                <img src={aromatherapy} alt="" />
                            </div>
                            <div className="text-cont">
                                <div className="con"><h5>Aromatherapy</h5><FiArrowRight style={{color:"#e52e71",fontSize:'1.2rem'}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Services;
