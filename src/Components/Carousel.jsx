import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import imgSlider1 from "../Images/img-slider1.jpg";
import imgSlider2 from "../Images/img-slider2.jpg";
import "./Carousel.css";
import Navbar from "./Navbar";

const Carousel = () => {
    return (
        <>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <Navbar />

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={imgSlider1}
                            className="slider-img d-block w-100"
                            alt="..."
                        />
                        <div className="slider-text">
                            <h1 className="carousel-text">
                                Welcome to Betty Beauty Salon
                            </h1>
                            <button className="buy-now-btn">Buy Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={imgSlider2}
                            className="slider-img d-block w-100"
                            alt="..."
                        />
                        <div className="slider-text">
                            <h1 className="carousel-text">
                                Everything is possible with our Salon
                            </h1>
                            <button className="buy-now-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    );
};

export default Carousel;
