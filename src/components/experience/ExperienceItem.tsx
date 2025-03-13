export interface ExperienceItemProps {
  title: string;
  isInProgress?: boolean;
  placeAndTime: string;
  href?: string;
  texts: string[];
  technos: string[];
  picture?: string;
}

export const ExperienceItem = ({
  title,
  isInProgress,
  placeAndTime,
  href,
  texts,
  technos,
  picture,
}: ExperienceItemProps) => {
  return (
    <article className="project">
      {href && !picture ? (
        <a href={href} title={`Site de ${title}`}>
          <h5 className="projectTitle">
            {title}
            {isInProgress && (
              <span>
                <span
                  className="miniPulsar"
                  style={{ animation: `pulsed 2s linear 0.5s infinite` }}
                />
                <span
                  className="miniPulsar"
                  style={{ animation: `pulsed 2s linear 0.75s infinite` }}
                />
                <span
                  className="miniPulsar"
                  style={{ animation: `pulsed 2s linear 1s infinite` }}
                />
              </span>
            )}
          </h5>
        </a>
      ) : (
        <h5 className="projectTitle">
          {title}
          {isInProgress && (
            <span>
              <span
                className="miniPulsar"
                style={{ animation: `pulsed 2s linear 0.5s infinite` }}
              />
              <span
                className="miniPulsar"
                style={{ animation: `pulsed 2s linear 0.75s infinite` }}
              />
              <span
                className="miniPulsar"
                style={{ animation: `pulsed 2s linear 1s infinite` }}
              />
            </span>
          )}
        </h5>
      )}

      <h6 className="projectDate">{placeAndTime}</h6>
      {texts.map((singleText, index) => (
        <p key={index}>{singleText}</p>
      ))}
      {picture && href && (
        <a href={href} title={`Site de ${title}`}>
          <img className="projectImage mobileImage" src={picture} alt={title} />
        </a>
      )}
      <div className="technoContainer">
        {technos.map((technoItem, index) => (
          <p className="techno" key={index}>
            {technoItem}
          </p>
        ))}
      </div>
    </article>
  );
};
