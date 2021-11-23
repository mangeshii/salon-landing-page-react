import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar=()=>{
    const [navBar, setNavBar] = useState(false);
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const changeBackground = () => {
        console.log(window.scroll);
        if (window.scrollY >= 70) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    return(
        <div className={navBar ? "nav-wrapper active" : "nav-wrapper"}>
        <nav>
            <div className="logo">
                <h1>Betty</h1>
                <p><i>Center of Beauty</i></p>
            </div>
            <div
                className={
                    hamburgerMenu ? "nav-hamburger" : " menu"
                }
                onClick={() => setHamburgerMenu(false)}
            >
                <ul>
                    <li className="home active">Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <button
                className={
                    navBar
                        ? "mobile-menu-icon active "
                        : "mobile-menu-icon"
                }
                onClick={() => setHamburgerMenu(!hamburgerMenu)}
            >
                {hamburgerMenu ? (
                    <FaTimes className="fa" />
                ) : (
                    <FaBars className="fa" />
                )}
            </button>
        </nav>
    </div>
    )
}

export default Navbar