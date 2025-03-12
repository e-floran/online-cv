import Skill from "./Skill";

function Frameworks() {
  const myFrameworks = [
    {
      name: "React",
    },
    {
      name: "React Native",
    },
    {
      name: "Next.js",
    },
    {
      name: "Vue.js",
    },
    {
      name: "Node.js",
    },
    {
      name: "Express",
    },
    {
      name: "PostgreSQL",
    },
    {
      name: "MySQL",
    },
    {
      name: "GraphQL",
    },
    {
      name: "TypeORM",
    },
    {
      name: "jQuery",
    },
    {
      name: "MUI",
    },
    {
      name: "Tailwind",
    },
    {
      name: "Bootstrap",
    },
  ];
  const frameworks = [];
  for (let i = 0; i < myFrameworks.length; i++) {
    frameworks.push(
      <Skill key={myFrameworks[i].name} name={myFrameworks[i].name} />
    );
  }
  return (
    <section className="skillset">
      <article className="sectionTitle">
        <div className="pulsarContainer">
          <div className="pulsar"></div>
        </div>
        <h3>Frameworks et librairies</h3>
      </article>
      {frameworks}
    </section>
  );
}

export default Frameworks;
