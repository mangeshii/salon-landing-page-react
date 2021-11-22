import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";
import imgSlider1 from "../Images/img-slider1.jpg";
import imgSlider2 from "../Images/img-slider2.jpg";
import "./Carousel.css";

const Carousel = () => {
    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {
        console.log(window.scroll)
        if (window.scrollY >= 90) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    return (
        <>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className={navBar ? 'nav-wrapper active' : 'nav-wrapper'}>
                    <nav>
                        <div className="logo">Betty</div>
                        <div className="menu">
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </nav>
                </div>
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
            <h1>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti vero fugit quisquam? Incidunt facilis fuga ex a veniam,
                minus vero voluptatibus dolorum at obcaecati. Similique dolorem
                corporis neque, aperiam, ea sunt eligendi fugit deleniti itaque
                quidem doloremque obcaecati non laboriosam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta nostrum facere deserunt optio eum, libero doloremque consectetur unde atque repellat qui. Laudantium, repellat necessitatibus. Laborum, explicabo modi? Rerum, soluta earum dignissimos veniam possimus voluptate aut culpa officia itaque perferendis exercitationem at dicta minima voluptates facere excepturi nemo tempora, quasi rem.
            </h1>
        </>
    );
};

export default Carousel;
