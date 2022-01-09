import 'animate.css';
import {useEffect, useRef, useState} from "react";

const Nav = () => {

    const [hiddenMenu, setHiddenMenu] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    const toggleClass = () => {
        setHiddenMenu(!hiddenMenu);
    };

    const handleResize = () => {
        if (window.innerWidth > 960) {
            setHiddenMenu(false);
        }
        else {
            setHiddenMenu(true);
        }
    }

    const handleScroll = () => {
        let stickyLine = headerRef.current.offsetTop + 50;

        if (window.pageYOffset > stickyLine) {
            headerRef.current.classList.add("sticky");
        }
        else {
            headerRef.current.classList.remove("sticky");
        }
    }

    return (
        <header className="bg-light" ref={headerRef}>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <h3 className="navbar-brand site-title">My Resume</h3>
                    <button className="navbar-toggle" type="button" aria-label="Toggle navigation" onClick={() => toggleClass()}>
                        <span className="navbar-toggle-icon" />
                    </button>
                    <div className={hiddenMenu ? 'menu animate__animated animate__bounce hidden' : 'menu animate__animated animate__bounce'}>
                        <ul className="navbar-nav">
                            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="#services" className="nav-link">Service</a></li>
                            <li className="nav-item"><a href="#skills" className="nav-link">Skill</a></li>
                            <li className="nav-item"><a href="#experiences" className="nav-link">Experience</a></li>
                            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Nav;