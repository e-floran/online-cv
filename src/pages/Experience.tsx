import Projects from "../components/experience/Projects";
import Work from "../components/experience/Work";
import Contact from "../components/Contact";
import "../style/experience.css";
export default function Experience() {
  return (
    <div className="pageContainer expPage">
      <p className="pageIntro">
        Je compte plusieurs expériences professionnelles réussies, que ce soit
        en tant que développeur ou, avant ça, en tant que journaliste.
      </p>
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}
