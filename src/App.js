import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Carousel from "./Components/Carousel";
import AboutUs from "./Components/AboutUs";
import WhatClientSays from "./Components/FixedAttachment";
import Services from "./Components/Services";
import MakeUp from "./Components/MakeUp";



const App = () => {
    return (
        <>
          <Carousel/>
          <AboutUs/>
          <WhatClientSays/>
          <Services/>
          <MakeUp/>

        </>
    );
};

export default App;
