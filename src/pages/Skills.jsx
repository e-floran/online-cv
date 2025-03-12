import Langages from "../components/skills/Langages";
import Frameworks from "../components/skills/Frameworks";
import Tools from "../components/skills/Tools";
import SoftSkills from "../components/skills/SoftSkills";
import OtherSkills from "../components/skills/OtherSkills";
import Contact from "../components/Contact";
import "../style/skills.css";
function Skills(){
    return(
        <div className="pageContainer skillsPage">
            <p className="pageIntro">Le métier de développeur fait appel à de nombreuses compétences, qu'elles soient techniques ou pas. J'ai à coeur de rester polyvalent, pour pouvoir m'adapter aux missions que me confie mon employeur.</p>
            <p className="pageIntro">Évidemment, cette page est une "photographie" à l'instant t, je me forme en permanence pour élargir mes compétences.</p>
            <Langages />
            <Frameworks />
            <SoftSkills />
            <Tools />
            <OtherSkills />
            <Contact />
        </div>
    )
};

export default Skills;