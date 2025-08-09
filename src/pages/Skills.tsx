import "../style/skills.css";
import { SkillsCategory } from "../components/skills/SkillsCategory";
const skillsData = [
  {
    title: "Langages et standards",
    skills: [
      "Français",
      "Anglais",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SQL",
      "PHP",
      "Python",
      "REST",
      "GraphQL",
    ],
  },
  {
    title: "Frameworks et librairies",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "Vue.js",
      "Angular",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MySQL",
      "TypeORM",
      "jQuery",
      "MUI",
      "Tailwind",
      "Bootstrap",
    ],
  },
  {
    title: "Soft skills",
    skills: [
      "Relationnel",
      "Travail en équipe",
      "Esprit d'équipe",
      "Autonomie",
      "Leadership",
      "Veille technologique",
    ],
  },
  {
    title: "Outils",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Jira",
      "VS code",
      "Bureautique",
      "CMS, montage",
      "Graphisme",
    ],
  },
  {
    title: "Autres",
    skills: [
      "Capacités rédactionnelles",
      "Animation de communauté",
      "Réseaux sociaux",
    ],
  },
];

export default function Skills() {
  return (
    <main className="skillsPage">
      <p className="pageIntro">
        Le métier de développeur fait appel à de nombreuses compétences,
        qu'elles soient techniques ou pas. J'ai à coeur de rester polyvalent,
        pour pouvoir m'adapter aux missions que me confie mon employeur.
      </p>
      <p className="pageIntro">
        Évidemment, cette page est une "photographie" à l'instant t, je me forme
        en permanence pour élargir mes compétences.
      </p>
      {skillsData.map((skillsItem, index) => (
        <SkillsCategory
          title={skillsItem.title}
          skills={skillsItem.skills}
          key={index}
        />
      ))}
    </main>
  );
}
