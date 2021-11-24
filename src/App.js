import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Carousel from "./Components/Carousel";
import AboutUs from "./Components/AboutUs";


const App = () => {
    return (
        <>
          <Carousel/>
          <AboutUs/>
          {/* <WhatClientSays/> */}

        </>
    );
};

export default App;
