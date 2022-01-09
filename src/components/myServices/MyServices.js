import webDesign from '../../images/web-design.svg';
import uix from '../../images/ui-ux.svg';
import application from '../../images/app-development.svg';
import microservice from '../../images/microservice.svg';

const MyServices = () => {
    return (
        <div className="my_services mt-4" id="services">
            <div className="container">
                <div className="text-center mb-2">
                    <h2 className="marker marker-center">My Services</h2>
                </div>
                <div className="text-center mb-2">
                    <p className="service_intro">
                        I offer services fit for software development, enhancing software quality, maintainability and scalability.
                    </p>
                </div>
                <div className="mb-2 services">
                    <div className="web-design text-center">
                        <img src={webDesign} alt="web design" className="mb-1" width="96" height="96"/>
                        <div className="h5">Web Design</div>
                    </div>

                    <div className="uix text-center">
                        <img src={uix} alt="UI UX" className="mb-1" width="96" height="96"/>
                        <div className="h5">UI / UX</div>
                    </div>

                    <div className="application text-center">
                        <img src={application} alt="hybrid application" className="mb-1" width="96" height="96"/>
                        <div className="h5">Hybrid Application</div>
                    </div>

                    <div className="microservice text-center">
                        <img src={microservice} alt="microservices" className="mb-1" width="96" height="96"/>
                        <div className="h5">Microservices</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyServices;