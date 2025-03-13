import Skill from "./Skill.tsx";

export const SkillsCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => {
  return (
    <section className="skillset">
      <article className="sectionTitle">
        <div className="pulsarContainer">
          <div className="pulsar" />
        </div>
        <h3>{title}</h3>
      </article>
      {skills.map((singleSkill, index) => (
        <Skill key={index} name={singleSkill} />
      ))}
    </section>
  );
};
