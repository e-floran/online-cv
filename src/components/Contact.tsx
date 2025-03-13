import Social from "./Social.tsx";

export default function Contact() {
  return (
    <footer>
      <article className="sectionTitle">
        <div className="pulsarContainer">
          <div className="pulsar"></div>
        </div>
        <h3>Contactez-moi</h3>
      </article>
      <p>
        Vous souhaitez me proposer une opportunité professionnelle, ou tout
        simplement échanger ? N'hésitez pas à me contacter à l'aide de l'un des
        réseaux accessibles ci-dessous.
      </p>
      <Social />
    </footer>
  );
}
