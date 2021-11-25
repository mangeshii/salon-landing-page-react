import "./Brands.css";
import brand1 from "../Images/brand1.png"
import brand2 from "../Images/brand2.png"
import brand3 from "../Images/brand3.png"
import brand4 from "../Images/brand4.png"
import brand5 from "../Images/brand5.png"


const Brands = () => {
    return (
        <div className="brands-wrapper">
            <div className="brands">
                <div className="brands-header">
                    <h1>Our Brands</h1>
                    <h5>We use only the high quality original products</h5>
                    <div className="hori-line"></div>
                </div>
                <div className="brand-container">
                    <div className="row row-cols-lg-5 g-2">
                        <div className="col brand1">
                            <div className="p-0">
                                <img src={brand1} alt="" />
                            </div>
                        </div>
                        <div className="col brand2">
                            <div className="p-0">
                            <img src={brand2} alt="" />
                            </div>
                        </div>
                        <div className="col brand3">
                            <div className="p-0">
                            <img src={brand3} alt="" />
                            </div>
                        </div>
                        <div className="col brand4">
                            <div className="p-0">
                            <img src={brand4} alt="" />
                            </div>
                        </div>
                        <div className="col brand5">
                            <div className="p-0">
                            <img src={brand5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Brands;
