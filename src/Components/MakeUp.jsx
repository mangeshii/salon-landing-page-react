import "./MakeUp.css";
import facial_makeup from "../Images/makeup.png";
import eye_makeup from "../Images/eye_makeup.png";
import face_makeup from "../Images/face_makeup.png";
import eyebrow_makeup from "../Images/eyebrow_makeup.png";
import hair_makeup from "../Images/hair_makeup.png";
import dressing_table from "../Images/dressing_table.png";

const MakeUp = () => {
    return (
        <>
            <div className="makeup-wrapper">
                <div className="makeup-container">
                    <div className="makeup-header">
                        <h1>Makeup</h1>
                        <h5>Our makeup services</h5>
                        <div className="hori-line"></div>
                    </div>
                    <div className="makeup-services row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                        <div className="col">
                            <div className="p-3 ms">
                                <img src={facial_makeup} alt="" />
                                <h5>Facial Makeup</h5>
                                <div className="overlay">
                                    <div className="overlay-text">
                                        <h5>Facial Makeup</h5>
                                        <h6>
                                            Suspendisse quis odio lobortis
                                            laoreet libero quis varius tortor.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 ms">
                                <img src={eye_makeup} alt="" />
                                <h5>Eye Makeup</h5>
                                <div className="overlay">
                                    <div className="overlay-text">
                                        <h5>Eye Makeup</h5>
                                        <h6>
                                            Suspendisse quis odio lobortis
                                            laoreet libero quis varius tortor.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 ms">
                                <img src={face_makeup} alt="" />
                                <h5>Face Makeup</h5>
                                <div className="overlay">
                                    <div className="overlay-text">
                                        <h5>Face Makeup</h5>
                                        <h6>
                                            Suspendisse quis odio lobortis
                                            laoreet libero quis varius tortor.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 ms">
                                <img src={eyebrow_makeup} alt="" />
                                <h5>Eyebrow Makeup</h5>
                                <div className="overlay">
                                    <div className="overlay-text">
                                        <h5>Eyebrow Makeup</h5>
                                        <h6>
                                            Suspendisse quis odio lobortis
                                            laoreet libero quis varius tortor.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 ms">
                                <img src={hair_makeup} alt="" />
                                <h5>Hair Makeup</h5>
                                <div className="overlay">
                                    <div className="overlay-text">
                                        <h5>Haircut Makeup</h5>
                                        <h6>
                                            Suspendisse quis odio lobortis
                                            laoreet libero quis varius tortor.
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-3 ms">
                                <img src={dressing_table} alt="" />
                                <h5>Dressing Table</h5>
                                <div className="overlay">
                                    <div className="overlay-text">
                                        <h5>Dressing Table</h5>
                                        <h6>
                                            Suspendisse quis odio lobortis
                                            laoreet libero quis varius tortor.
                                        </h6>
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

export default MakeUp;
