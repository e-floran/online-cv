import { ExperienceItem, ExperienceItemProps } from "./ExperienceItem";

export const ExperienceCategory = ({
  title,
  items,
}: {
  title: string;
  items: ExperienceItemProps[];
}) => {
  return (
    <section className="sectionContainer">
      <article className="sectionTitle">
        <div className="pulsarContainer">
          <div className="pulsar" />
        </div>
        <h3>{title}</h3>
      </article>
      <div className="projectsContainer">
        {items.map((singleItem, index) => (
          <ExperienceItem
            key={index}
            title={singleItem.title}
            isInProgress={singleItem.isInProgress}
            placeAndTime={singleItem.placeAndTime}
            href={singleItem.href}
            texts={singleItem.texts}
            technos={singleItem.technos}
            picture={singleItem.picture}
          />
        ))}
      </div>
    </section>
  );
};
