
const Skills = (props) => {
    let {skills} = props;

    return (
        <div className="my_skills mt-4" id="skills">
            <div className="container">
                <div className="text-center mb-2">
                    <h2 className="marker marker-center">My Skills</h2>
                </div>
                <div className="text-center mb-2">
                    <p className="skills_intro">
                        I am a quick learner and specialize in multitude of skills required for Web Application Development and Product Design in both Monolithic approach or Microservices approach.
                    </p>
                </div>
                <div className="skills mb-2">
                    {
                        skills.map(skill => (
                            <div className="text-center skill" key={skill.key}>
                                <img src={skill.src} alt={skill.alt} width="50" height="50"/>
                                <div className="h6">{skill.title}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Skills;