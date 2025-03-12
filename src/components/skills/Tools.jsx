import Skill from "./Skill";

function Tools() {
  const myTools = [
    {
      name: "Git",
    },
    {
      name: "GitHub",
    },
    {
      name: "GitLab",
    },
    {
      name: "VS code",
    },
    {
      name: "Bureautique",
    },
    {
      name: "CMS, montage",
    },
    {
      name: "Graphisme",
    },
  ];
  const tools = [];
  for (let i = 0; i < myTools.length; i++) {
    tools.push(<Skill key={myTools[i].name} name={myTools[i].name} />);
  }
  return (
    <section className="skillset">
      <article className="sectionTitle">
        <div className="pulsarContainer">
          <div className="pulsar"></div>
        </div>
        <h3>Outils</h3>
      </article>
      {tools}
    </section>
  );
}

export default Tools;
