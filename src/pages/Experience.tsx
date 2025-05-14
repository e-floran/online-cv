import { ExperienceCategory } from "../components/experience/ExperienceCategory";
import "../style/experience.css";

const experienceData = [
  {
    title: "Expériences professionnelles",
    items: [
      {
        title: "We Cheers",
        isInProgress: true,
        placeAndTime: "télétravail (Montpellier), depuis 2025",
        href: "https://wecheers.fr/",
        texts: [
          "Cette expérience en start-up me permet de participer à la première phase de forte croissance d'une application prometteuse.",
        ],
        technos: ["React Native", "PHP", "Symfony"],
      },
      {
        title: "Polyconseil",
        isInProgress: false,
        placeAndTime: "télétravail (Paris), 2022 - 2024",
        href: "https://www.polyconseil.fr/",
        texts: [
          "Cette expérience en ESN parisienne m'a permis de travailler de manière agile dans des équipes de grandes tailles avec des développeuses, développeurs et product managers.",
          "Être entouré de collaboratrices et de collaborateurs de profils et de niveaux d'expérience variés permet à chacun d'apporter quelque chose aux autres et ainsi d'apprendre chaque jour.",
        ],
        technos: [
          "React",
          "TypeScript",
          "Node.js",
          "GraphQL",
          "TypeORM",
          "PostgreSQL",
          "MUI",
          "AWS",
          "Docker",
          "Kubernetes",
          "Gitlab",
        ],
      },
      {
        title: "MD Dynamics",
        isInProgress: false,
        placeAndTime: "télétravail (Agen), 2021 - 2022",
        href: "https://www.mddynamics.fr/",
        texts: [
          "Ma première expérience en tant que développeur fullstack m'a plongé dans l'univers du développement et de l'exploitation des applications métiers distribuées, au service des entreprises",
          "Entrer dans un secteur d'avenir comme celui-ci est toujours enrichissant intellectuellement et l'exigence du BtoB colle parfaitement avec mon attachement au travail bien fait, jusque dans les moindres détails.",
        ],
        technos: ["React"],
      },
      {
        title: "Uballers",
        isInProgress: false,
        placeAndTime: "télétravail (Paris), 2021",
        href: "https://uballers.com/",
        texts: [
          "Étant passionné de basket, l'univers de l'entreprise était évidemment un vrai plus pour moi.",
        ],
        technos: ["React", "React Native"],
      },
      {
        title: "Dordogne Libre",
        isInProgress: false,
        placeAndTime: "Périgueux, 2015 - 2020",
        texts: [
          "Mon passage à Dordogne Libre restera probablement mon expérience la plus complète en tant que journaliste. J'ai été engagé en tant que journaliste sportif et, moins de deux ans plus tard, j'ai été promu responsable du service secrétariat de rédaction. Outre l'expérience acquise en matière de rédaction, de relecture, de montage et de création de la maquette, j'ai aussi eu, pour la première fois de ma carrière, des responsabilités.",
          "Dans cette entreprise de petite taille, j'ai aussi cultivé ma capacité à la débrouillardise et au multi-tâche : il fallait souvent faire beaucoup en peu de temps et avec peu de moyens techniques et humain.",
        ],
        technos: ["Millenium", "Gimp"],
      },
      {
        title: "La République des Pyrénées",
        isInProgress: false,
        placeAndTime: "Pau, 2013 - 2015",
        texts: [
          "Travailler chez Pyrénées Presse m'a offert ma première vraie expérience de longue durée. J'ai pu trouver ma place dans une équipe et apprendre beaucoup de choses en passant par le secrétariat de rédaction ainsi que les rédactions locales.",
        ],
        technos: ["Millenium"],
      },
      {
        title: "Le Dauphiné Libéré",
        isInProgress: false,
        placeAndTime: "Gap, 2012",
        texts: [
          "Ce premier contrat en tant que journaliste, dans ma ville natale, m'a permis de découvrir la presse locale et la polyvalence qu'elle demande.",
        ],
        technos: ["Eidos"],
      },
      {
        title: "Stratégies",
        isInProgress: false,
        placeAndTime: "Issy-les-Moulineaux, 2011",
        texts: [
          "Avec ce stage de fin d'études, j'ai mis en pratique ce que j'avais appris pendant ma formation tout en découvrant les secteurs des médias et de la communication.",
        ],
        technos: [],
      },
    ],
  },
  {
    title: "Projets",
    items: [
      {
        title: "Fantasy league helper",
        isInProgress: true,
        placeAndTime: "depuis septembre 2024",
        texts: [
          "Cette web app sert de d'outil pratique pour la gestion au quotidien de fantasy leagues ESPN. Elle récupère directement les informations sur l'API d'ESPN une fois que l'utilisateur a rentré l'ID de sa ligue.",
        ],
        technos: ["React", "Typescript"],
        picture: "/files/fantasy_league.png",
        href: "https://espn-fantasy-nba-helper.netlify.app/",
      },
      {
        title: "Association Pour Guillaume",
        isInProgress: true,
        placeAndTime: "depuis septembre 2024",
        texts: [
          "Site d'une association caritative qui vise à récolter des fonds pour la recherche contre le cancer.",
        ],
        technos: ["React", "MUI"],
        picture: "/files/guillaume.png",
        href: "https://www.guillaumevincent.fr/",
      },
      {
        title: "Foulpougne festival",
        isInProgress: false,
        placeAndTime: "décembre 2020 - septembre 2024",
        texts: [
          "Pour ce projet, lancé lors de la fin de ma formation, j'ai eu l'occasion de réaliser mon premier site \"utile\". En effet, pour promouvoir le festival de danses traditionelles Foulpougne festival, ses organisateurs m'ont demandé de créer un site avec toutes les informations pratiques pour leurs festivaliers.",
        ],
        technos: ["React"],
        picture: "/files/foulpougne.png",
        href: "https://foulpougnefestival.netlify.app/",
      },
      {
        title: "Feed me !",
        isInProgress: false,
        placeAndTime: "décembre 2020 - février 2021",
        texts: [
          "Pour ce dernier projet au long cours, nous avons eu la possibilité de traiter avec un vrai client : Open food facts. L'objectif principal était de rendre une application existante plus ludique pour attirer un public plus large et le fidéliser. Le développement devait également viser le mobile en priorité. J'ai choisi ce projet car il me permettait de travailler en Vue.js et ainsi d'ajouter un deuxième framework majeur à mon apprentissage. C'était également mon premier projet avec un back-end.",
        ],
        technos: ["Vue.js", "Node.js"],
        picture: "/files/feed_me.png",
        href: "https://feedme.openfoodfacts.org/",
      },
      {
        title: "Cabi.net",
        isInProgress: false,
        placeAndTime: "janvier 2021",
        href: "https://cabinet-hackathon.netlify.app/",
        texts: [
          "Le défi principal, pour ce deuxième hackathon, était de créer un site marchant en optimisant son SEO, le tout en 48 heures. Il nous était également demandé de trouver une thématique décalée pour ce site marchand. Mon équipe et moi avons alors inventé Cabi.net, un site de vente de toilettes. Pour contrer les problématique de référencement liées à React, nous avons ajouté React Helmet et React Snap.",
        ],
        technos: ["React", "React Snap", "React Helmet"],
        picture: "/files/cabinet.png",
      },
      {
        title: "Portfolio",
        isInProgress: true,
        placeAndTime: "depuis novembre 2020",
        href: "https://floran-eiclies.netlify.app/",
        texts: [
          "Objectif évident pour ce premier projet personnel (que vous consultez actuellement) avec lequel je vise à mettre en avant mes capacités. Il a été pensé évolutif et utilise React.",
        ],
        technos: ["React", "Typescript"],
        picture: "/files/portfolio.png",
      },
      {
        title: "Wild Disaster",
        isInProgress: false,
        placeAndTime: "octobre 2020 - novembre 2020",
        href: "https://wild-disaster.netlify.app/",
        texts: [
          "Pour ce deuxième projet de ma formation à la Wild code school, l'accent était mis sur l'exploitation d'une API tout en utilisant React. Mon groupe a choisi l'API Eonet de la Nasa pour créer une application de suivi des évènements climatiques à l'échelle planétaire.",
        ],
        technos: ["React", "Leaflet"],
        picture: "/files/wild_disaster.png",
      },
      {
        title: "Uber Arts",
        isInProgress: false,
        placeAndTime: "octobre 2020",
        href: "https://uberarts.netlify.app/",
        texts: [
          "Pour ce premier hackathon, le thème choisi par notre école était de créer une application que nous pourrions apporter à une autre époque grâce à un voyage temporel. Nous avons imaginé un service de mise en relation entre rois et seigneurs du passé avec des artistes de différentes époques.",
        ],
        technos: ["React"],
        picture: "/files/uber_arts.png",
      },
      {
        title: "Les Papilles voyageuses",
        isInProgress: false,
        placeAndTime: "septembre 2020",
        href: "https://papilles-voyageuses.netlify.app/",
        texts: [
          "Ce premier projet, quasiment entièrement en HTML et CSS, était surtout l'occasion de se familiariser avec la création d'un projet de manière collective. Nous avons choisi un thème universel : la cuisine.",
        ],
        technos: ["HTML", "CSS", "Javascript"],
        picture: "/files/papilles.png",
      },
    ],
  },
];
export default function Experience() {
  return (
    <main className="expPage">
      <p className="pageIntro">
        Je compte plusieurs expériences professionnelles réussies, que ce soit
        en tant que développeur ou, avant ça, en tant que journaliste.
      </p>
      {experienceData.map((category, index) => (
        <ExperienceCategory
          key={index}
          title={category.title}
          items={category.items}
        />
      ))}
    </main>
  );
}
