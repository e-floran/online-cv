export default function Skill({ name }: { name: string }) {
  return (
    <article className="skillContainer">
      <p>{name}</p>
    </article>
  );
}
