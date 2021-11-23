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
            <h1>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti vero fugit quisquam? Incidunt facilis fuga ex a veniam,
                minus vero voluptatibus dolorum at obcaecati. Similique dolorem
                corporis neque, aperiam, ea sunt eligendi fugit deleniti itaque
                quidem doloremque obcaecati non laboriosam. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Soluta nostrum facere
                deserunt optio eum, libero doloremque consectetur unde atque
                repellat qui. Laudantium, repellat necessitatibus. Laborum,
                explicabo modi? Rerum, soluta earum dignissimos veniam possimus
                voluptate aut culpa officia itaque perferendis exercitationem at
                dicta minima voluptates facere excepturi nemo tempora, quasi
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                dignissimos qui, repudiandae perferendis nemo minima nihil
                quibusdam laboriosam nam inventore quam nisi odio, aut quia
                eveniet velit! Doloremque rem quibusdam ipsam? Iste odio
                recusandae dicta beatae pariatur optio delectus minima incidunt
                perferendis doloremque blanditiis officiis alias laborum, enim
                sint commodi numquam. Mollitia at a eius quas ut optio excepturi
                ducimus accusamus officiis provident, omnis suscipit veritatis
                perferendis perspiciatis odio id totam reiciendis voluptatibus,
                in laudantium quibusdam qui cupiditate eveniet ipsum? Architecto
                aperiam debitis corrupti necessitatibus quas animi, tempora
                tenetur, quidem laboriosam laborum laudantium? Expedita
                doloribus quidem dolores autem tempora consequatur perferendis
                voluptatem incidunt excepturi vel nam, atque ipsum unde?
                Quibusdam, voluptatum tempore totam dolores praesentium
                consequatur pariatur tenetur repellendus in voluptatem tempora
                possimus necessitatibus laudantium mollitia delectus cupiditate
                velit beatae aperiam asperiores quam labore. Explicabo ex
                possimus, necessitatibus, dolores esse exercitationem nisi
                blanditiis autem sunt repellendus similique, tempora ipsam
                aliquam aut vitae mollitia perspiciatis eligendi architecto
                illo. Sint adipisci omnis similique ex quae, facilis ullam,
                consequuntur maxime et ad tempore debitis dolore accusamus
                dolorem suscipit maiores. Quia aspernatur perspiciatis corrupti
                suscipit animi architecto pariatur illo eum minima quasi alias
                possimus maxime, facilis neque quibusdam assumenda nihil sit.
                Id, quos minima! rem.
            </h1>
        </>
    );
};

export default Carousel;
