import avatar from '../../images/profile_img.jpeg';

const About = (props) => {

    const currentYear = new Date().getFullYear();
    const myBirthYear = 1996;
    const firstYearWorking = 2017;

    return (
        <div className="about mt-4" id="about">
            <div className="container">
                <div className="intro-content">
                    <h2 className="intro-greeting">Hello! I'm Hoang Vu.</h2>
                    <p>
                        I'm a full-stack software developer with roughly {currentYear - firstYearWorking} years of experience. I am an independent, self-motivated, and earnest software developer.
                        I have good experience in the full life cycle of the software design processes including requirement analysis, prototyping, concept analysis, design, implementation of a clean, scalable, and maintainable application, testing, enhancing performance, maintenance.
                    </p>
                    <p>
                        I graduated from FPT University in 2018 with a <strong>Good degree</strong>. Ever since I graduated with a CS degree,
                        I've been working as a full-stack software developer and have been proving my skills through many successful projects.
                        I have never stopped educating myself with online courses and have been sharpening my skills to deliver better and better quality works.
                        Apart from sharpening my technical skills every day, I have a <strong>6.5 IELTS certificate</strong> and am willing to relocate to a different city to work.
                        I'm excited about working in a whole new different city with new people and new cultures.
                    </p>
                    <div className="intro-status mt-2">
                        <div className="intro-section-title">
                            <span>Age</span>
                        </div>
                        <div className="intro-section-content fw-bolder">
                            <span>{currentYear - myBirthYear}</span>
                        </div>
                        <div className="intro-section-title">
                            <span>Email</span>
                        </div>
                        <div className="intro-section-content fw-bolder">
                            <span>{props.myInfo.email}</span>
                        </div>
                        <div className="intro-section-title">
                            <span>Skype</span>
                        </div>
                        <div className="intro-section-content fw-bolder">
                            <span>{props.myInfo.skype}</span>
                        </div>
                        <div className="intro-section-title">
                            <span>Phone</span>
                        </div>
                        <div className="intro-section-content fw-bolder">
                            <span>{props.myInfo.phone_number}</span>
                        </div>
                        <div className="intro-section-title">
                            <span>Address</span>
                        </div>
                        <div className="intro-section-content fw-bolder">
                            <span>{props.myInfo.address}</span>
                        </div>
                        <div className="intro-section-title">
                            <span>Status</span>
                        </div>
                        <div className="intro-section-content fw-bolder">
                            <span>{props.myInfo.status}</span>
                        </div>
                    </div>
                </div>
                <div className="profile-img">
                    <img src={avatar} alt="avatar" className="avatar" width="400" height="auto"/>
                </div>
            </div>
        </div>
    )
}
export default About;