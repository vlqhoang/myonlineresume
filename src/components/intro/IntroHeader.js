import helloImg from '../../images/hello3.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Fragment} from "react";

const IntroHeader = () => {
    return (
        <Fragment>
            <div className="bg-light intro-header">
                <div className="container">
                    <div className="intro-img">
                        <img className="img" src={helloImg} alt="hello"/>
                    </div>

                    <div className="intro-content">
                        <div className="mt-4">
                            <p className="lead text-uppercase mb-1">Hello!</p>
                            <h1 className="intro-title">I'm Hoang Vu</h1>
                            <p className="lead mt-2 fw-normal">A Software Developer</p>
                            <div className="social-nav">
                                <nav>
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://github.com/vlqhoang" target="_blank"><FontAwesomeIcon icon={["fab", "github"]} /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://www.linkedin.com/in/hoang-vu-857192197/" target="_blank"><FontAwesomeIcon icon={["fab", "linkedin-in"]} /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://stackoverflow.com/users/6753280/hoang-vu" target="_blank"><FontAwesomeIcon icon={["fab", "stack-overflow"]} /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="https://www.facebook.com/vulequochoang/" target="_blank"><FontAwesomeIcon icon={["fab", "facebook"]} /></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="mt-2">
                                <a href="#contact" className="btn btn-primary shadow-sm hover-effect">Get in touch <FontAwesomeIcon icon={["fas", "arrow-right"]} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wave-bg"/>
        </Fragment>
    )
}
export default IntroHeader;