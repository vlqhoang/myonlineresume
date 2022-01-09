import './App.scss';
import MyInfo from './data/info';
import MySkills from './data/skills';
import MyExperiences from './data/experiences';

import Nav from "./components/nav/Nav";
import './components/nav/Nav.scss';
import IntroHeader from "./components/intro/IntroHeader";
import './components/intro/IntroHeader.scss';

import About from "./components/about/About";
import './components/about/About.scss';

import MyServices from "./components/myServices/MyServices";
import './components/myServices/MyServices.scss';

import Skills from "./components/skills/Skills";
import './components/skills/Skills.scss';

import Experience from "./components/experiences/experiences";
import './components/experiences/experiences.scss';

import Contact from "./components/contact/contact";
import './components/contact/contact.scss';

import Footer from "./components/footer/footer";
import './components/footer/footer.scss';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);

function App() {
  return (
      <div className="App">
          <Nav />
          <IntroHeader/>
          <About myInfo={MyInfo}/>
          <MyServices />
          <Skills skills={MySkills}/>
          <Experience skills={MySkills} experiences={MyExperiences}/>
          <Contact myInfo={MyInfo}/>
          <Footer />
      </div>
  );
}

export default App;
