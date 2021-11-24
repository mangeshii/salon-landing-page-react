import "./AboutUs.css";
import dottedImg from "../Images/dots.png";
import aboutImg from "../Images/about.jpg";
const AboutUs = () => {
    return (
        <>
            <div className="about-us-wrapper ">
                <div className="about-us">
                    <div className="row  g-3 g-lg-4">
                        <div className="col-md-7 col-12">
                            <div className="p-3">
                                <h1 className="about-heading">About Us</h1>
                                <h5 className="sub-heading">
                                    Welcome bring the best service!
                                </h5>
                                <div className="hori-line"></div>
                                <h4 className="ad">
                                    Beauty bibendu tunc duntez variu estibulum
                                    vivera the mana mattis gravida sapien iwense
                                    eu nunc endum.
                                </h4>
                                <h6 className="detail-para">
                                    Quality the nunc bibe endum in finibus elit
                                    eget the solli citudin elit. Phaselu rutrum
                                    in lacusu euismod. Vestibulum eleifend
                                    tortor orci eu ornare tortor semper at. Duis
                                    scelerisque the nise duru the look. Liwense
                                    eu nunc bibe endum in finibus elit eget the
                                    solli citudin elit. Drae tnea rutierum in
                                    lacus ut euismod eleifend tore orci eu
                                    ornare.
                                </h6>
                                <h6 className="detail-para">
                                    Duis scelerisque the nibhse drana moss
                                    pulvinar laie. Quality the biberon endum in
                                    finbus elit egethe solli citudin elit.
                                    Phasellus rutrum inle lacusut euismod.
                                    Vestibulum eleifend tortor eu misse endumin
                                    finbus elit eget the soli citudin elit.
                                </h6>{" "}
                                <h6 className="detail-para">
                                    Vivense eu nunc bibe endum in finibus elit
                                    eget the solli citudin elit. Avensie
                                    rutrumin lacus ut euismod. Vestibulum
                                    eleifend tortor orci eu ornare sempe.
                                </h6>
                                <h4 className="ad">
                                    Betty White | Salon Owner
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-5 col-12 img-wrapper">
                            <div className="p-3">
                                <div className="dotted-img-wrapper">
                                    <img
                                        className="dot-img "
                                        src={dottedImg}
                                        alt=""
                                    />
                                    <div className="img-border"></div>
                                    <div className="about-img-wrapper">
                                        <img className="about-img" src={aboutImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AboutUs;
