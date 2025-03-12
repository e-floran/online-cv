import Skill from "./Skill";

function SoftSkills() {
  const mySoftSkills = [
    {
      name: "Relationnel",
    },
    {
      name: "Travail en équipe",
    },
    {
      name: "Esprit d'équipe",
    },
    {
      name: "Autonomie",
    },
    {
      name: "Leadership",
    },
    {
      name: "Veille technologique",
    },
  ];
  const softSkills = [];
  for (let i = 0; i < mySoftSkills.length; i++) {
    softSkills.push(
      <Skill key={mySoftSkills[i].name} name={mySoftSkills[i].name} />
    );
  }
  return (
    <section className="skillset">
      <article className="sectionTitle">
        <div className="pulsarContainer">
          <div className="pulsar"></div>
        </div>
        <h3>Soft skills</h3>
      </article>
      {softSkills}
    </section>
  );
}

export default SoftSkills;
