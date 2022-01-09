import microserviceImg from '../../images/microservice.svg';

const Experiences = (props) => {

    let {skills, experiences} = props;

    return (
        <div className="my_experiences mt-4" id="experiences">
            <div className="container">
                <div className="text-center mb-2">
                    <h2 className="marker marker-center">My Experiences</h2>
                </div>

                <div className="experiences">
                    {
                        experiences.map(experience => (
                            <div className="experience card mb-2">
                                <div className="card-header pd-left-2 pd-right-2">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h5 className="experience_title mb-05">{mapJobTypeToTitle(experience.job_type)}</h5>
                                            <h6 className="project_title mb-05">
                                                Project - {renderProjectTitle(experience.url, experience.project_title)}
                                            </h6>
                                            <div className="text-muted text-small">
                                                <span>{experience.company}</span>
                                                <small>{experience.time_window}</small>
                                            </div>
                                        </div>
                                        {renderJobTypeImg(experience.job_type)}
                                    </div>
                                </div>
                                <div className="card-body pd-left-2 pd-right-2">
                                    {
                                        experience.descriptions.map(description => (
                                            <p>{description}</p>
                                        ))
                                    }
                                    <h3>Applied:</h3>
                                    <div className="skills">
                                        {renderSkills(experience.skills, skills)}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Experiences;

const mapJobTypeToTitle = (jobType) => {
    switch (jobType) {
        case 1: return 'UI/UX Designer';
        case 2: return 'Application Developer';
        case 3: return 'Website Designer';
        case 4: return 'Full Stack Developer';
        case 5: return 'Backend Developer - Microservices';
        case 6: return 'Team Lead - Application Developer'
        default: return ''
    }
}

const renderJobTypeImg = (jobType) => {
    switch (jobType) {
        case 1: return (
            <img src="https://demo.templateflip.com/super/images/services/ui-ux.svg" alt="UI/UX" width="60" height="60"/>
        );
        case 2:
        case 6:
            return (
            <img src="https://demo.templateflip.com/super/images/services/app-development.svg" alt="App" width="60" height="60"/>
        );
        case 3: return (
            <img src="https://demo.templateflip.com/super/images/services/web-design.svg" alt="Web Design" width="60" height="60"/>
        );
        case 4: return (
            <img src="https://demo.templateflip.com/super/images/services/full-stack.svg" alt="Full Stack" width="60" height="60"/>
        );
        case 5: return (
            <img src={microserviceImg} alt="Microservices" width="60" height="60"/>
        );
        default: return ''
    }
}

const renderProjectTitle = (url, projectTitle) => {
    if (url) {
        return (
            <a className="project_link" href={url}>{projectTitle}</a>
        )
    }
    else {
        return (projectTitle)
    }
}

const renderSkills = (project_skills, all_skills) => {
    const skills = project_skills.map(project_skill => all_skills.find(available_skill => project_skill === available_skill.key))
    return skills.map(skill => {
        return (
            <img src={skill.src} alt={skill.alt} className="skill_img" width="40" height="40"/>
        )
    })
}
