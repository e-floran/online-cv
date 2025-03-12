function Skill(props) {
  const { name } = props;

  return (
    <article className="skillContainer">
      <p>{name}</p>
    </article>
  );
}

export default Skill;
