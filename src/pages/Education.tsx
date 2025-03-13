import "../style/education.css";
import { TextSection } from "../components/generic/TextSection";
const educationData = [
  {
    title: "Développement",
    texts: ["Développeur web, Wild code school, campus remote, 2020-2021"],
  },
  {
    title: "Journalisme et Économie",
    texts: [
      "Master en journalisme et communication économiques, Faculté d'économie appliquée, Université Aix-Marseille III, 2010-2011",
      "Diplôme universitaire en journalisme et communication web, Faculté d'économie appliquée, Université Aix-Marseille III, 2010-2011",
    ],
  },
];

export default function Education() {
  return (
    <main className="educPage">
      <p className="pageIntro">
        Après une formation universitaire initiale en économie, puis en
        journalisme, j'ai suivi une formation en développement web.
      </p>
      {educationData.map((educationItem, index) => (
        <TextSection
          title={educationItem.title}
          texts={educationItem.texts}
          hasDots
          alignLeft
          key={index}
        />
      ))}
    </main>
  );
}
