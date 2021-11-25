import "./FixedAttachment.css";
import client1 from "../Images/client1.png";

const WhatClientSays = () => {
    return (
        <div className="fixed-image-wrapper">
            <div className="row what-client-says-wrapper ">
                <div className="col-md-5 col-12 what-client-says-content">
                    <div className="py-4">
                        <h1 className="header">What Client Says about Betty</h1>
                        <h6 className="content">
                            Quisque consectetur massa id ipsum soltudin
                            ultrices. Pellentesque the sceisque justo.
                        </h6>
                    </div>
                </div>
                <div className="col-md-7 col-12 slider-cont">
                    <div className="p-3 col-11 text">
                        <h6>
                            Quality dapibus augue metus the nec feugiat erat
                            hendrerit nec. Duister ve ante the lemon sanlae.
                            Phasellus rutrum in lacus ut euismod. Vestibulum
                            eleifend tortor orci euthe ornare tortor somera
                            theme duis miss the nibhse
                        </h6>
                        <div className="client-detail">
                            <img className="client-image" src={client1} alt="" />
                            <div className="client-name">
                            <h5>Jason White</h5>
                                <h6>Model</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WhatClientSays;
