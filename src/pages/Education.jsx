import WebDev from "../components/education/WebDev";
import Journalism from "../components/education/Journalism";
import Contact from "../components/Contact";
import "../style/education.css";
function Education() {
  return (
    <div className="pageContainer educPage">
      <p className="pageIntro">
        Après une formation universitaire initiale en économie, puis en
        journalisme, j'ai suivi une formation en développement web.
      </p>
      <WebDev />
      <Journalism />
      <Contact />
    </div>
  );
}

export default Education;
