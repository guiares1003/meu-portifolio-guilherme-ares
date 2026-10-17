import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Timeline from './components/Timeline.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { about, contact, links, profile, projectKinds, projects, sections, skills, timeline } from './data/content.js';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header sections={sections} name={profile.fullName} role={profile.role} />
      <main id="conteudo" tabIndex={-1}>
        <Hero profile={profile} links={links} />
        <About about={about} />
        <Projects projects={projects} kinds={projectKinds} />
        <Skills skills={skills} />
        <Timeline items={timeline} />
        <Contact contact={contact} links={links} />
      </main>
      <Footer name={profile.fullName} />
    </>
  );
}
