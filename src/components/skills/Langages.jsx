import Skill from "./Skill";

function Langages() {
  const myLangages = [
    {
      name: "Français",
    },
    {
      name: "Anglais",
    },
    {
      name: "JavaScript",
    },
    {
      name: "TypeScript",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "SQL",
    },
    {
      name: "PHP",
    },
    {
      name: "Python",
    },
  ];
  const langages = [];
  for (let i = 0; i < myLangages.length; i++) {
    langages.push(<Skill key={myLangages[i].name} name={myLangages[i].name} />);
  }
  return (
    <section className="skillset">
      <article className="sectionTitle">
        <div className="pulsarContainer">
          <div className="pulsar"></div>
        </div>
        <h3>Langages</h3>
      </article>
      {langages}
    </section>
  );
}

export default Langages;
