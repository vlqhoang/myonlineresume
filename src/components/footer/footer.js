import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="pt-3 pb-3 text-center bg-light mt-4 footer">
            <div className="container">
                <div className="mt-2 mb-2">
                    <div className="h4">Hoang Vu</div>
                    <p>Full-stack software developer.</p>

                    <div className="social-nav">
                        <nav role="navigation">
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
                </div>
            </div>
        </footer>
    )
}
export default Footer;