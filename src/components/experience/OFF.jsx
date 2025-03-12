function OFF() {
  return (
    <article className="project">
      <h5 className="projectTitle">
        <a href="https://feedme.openfoodfacts.org/">Feed me !</a>
      </h5>
      <h6 className="projectDate">décembre 2020 - février 2021</h6>
      <p>
        Pour ce dernier projet au long cours, nous avons eu la possibilité de
        traiter avec un vrai client : Open food facts. L'objectif principal
        était de rendre une application existante plus ludique pour attirer un
        public plus large et le fidéliser. Le développement devait également
        viser le mobile en priorité. J'ai choisi ce projet car il me permettait
        de travailler en Vue.js et ainsi d'ajouter un deuxième framework majeur
        à mon apprentissage. C'était également mon premier projet avec un
        back-end.
      </p>
      <a href="https://feedme.openfoodfacts.org/">
        <img
          className="projectImage mobileImage"
          src="/files/feed_me.png"
          alt="Feed me"
        ></img>
      </a>
      <div className="technoContainer">
        <p className="techno">Vue.js</p>
        <p className="techno">Node.js</p>
      </div>
    </article>
  );
}

export default OFF;
