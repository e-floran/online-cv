export const TextSection = ({
  title,
  hasDots,
  texts,
  alignLeft,
}: {
  title: string;
  hasDots?: boolean;
  texts: string[];
  alignLeft?: boolean;
}) => {
  return (
    <section className="sectionContainer">
      <article className="sectionTitle">
        <div className="pulsarContainer">
          <div className="pulsar" />
        </div>
        <h3>{title}</h3>
      </article>
      {texts.map((text, index) => (
        <p key={index} style={alignLeft ? { textAlign: "left" } : undefined}>
          {hasDots && <span className="courseDot" />}
          {text}
        </p>
      ))}
    </section>
  );
};
