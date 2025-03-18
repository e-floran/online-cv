import { TextSection } from "../components/generic/TextSection.tsx";
import useWindowSize from "../hooks/useWindowSize.tsx";
import "../style/home.css";
const homeData = [
  {
    title: "Mon parcours",
    texts: [
      "Je suis actuellement développeur chez WeCheers. J'apporte une vraie passion pour le développement mais aussi un profil atypique enrichi par ma première vie professionnelle.",
      "En effet, après plusieurs expériences réussies dans la presse et après avoir touché à tous les métiers qu'elle a à offrir, je me suis lancé un nouveau défi, tourné vers l'avenir, en devenant développeur.",
      'Pour démarrer cette nouvelle carrière, entre 2020 et 2021, j\'ai suivi une formation "Développeur web" sur le campus remote de la Wild code school.',
    ],
  },
  {
    title: "Mieux me connaître",
    texts: [
      "J'aime écrire ! Que ce soit du code ou un langage plus traditionnel. Mais il y a plein d'autres domaines qui me passionnent.",
      "Ancien journaliste sportif, je suis un mordu de sport(s). Si tous m'intéressent, celui que je suis avec le plus d'assiduité est le basket. Je l'ai d'ailleurs pratiqué, à petit niveau, en universitaire ou en tournois corpo pour représenter mon ancien employeur.",
      "J'apprécie également me détendre avec des jeux de société ou des jeux vidéo, surtout à plusieurs pour un moment de convivialité.",
      "Enfin, mon loisir principal au quotidien reste la cuisine, que ce soit pour ma compagne, mes enfants ou mes amis. J'aime y mélanger les saveurs d'horizons différents.",
    ],
  },
];

export default function Home() {
  const width = useWindowSize();
  return (
    <main className="pageContainer homePage">
      <img
        className="profilePic"
        src={
          width > 800
            ? "/files/floran_eiclies.png"
            : "/files/floran_eiclies_mobile.png"
        }
        alt="Floran Eiclies"
      />
      {homeData.map((homeItem, index) => (
        <TextSection
          title={homeItem.title}
          texts={homeItem.texts}
          key={index}
        />
      ))}
    </main>
  );
}
