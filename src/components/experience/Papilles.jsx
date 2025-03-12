function Papilles(){
    return(
        <article className="project">
            <h5 className="projectTitle"><a href="https://papilles-voyageuses.netlify.app/team.html">Les Papilles voyageuses</a></h5>
            <h6 className="projectDate">septembre 2020</h6>
            <p>Ce premier projet, quasiment entièrement en HTML et CSS, était surtout l'occasion de se familiariser avec la création d'un projet de manière collective. Nous avons choisi un thème universel : la cuisine.</p>
            <a href="https://papilles-voyageuses.netlify.app/team.html"><img className="projectImage" src="/files/papilles.png" alt="Les Papilles voyageuses"></img></a>
            <div className="technoContainer">
                <p className="techno">HTML</p>
                <p className="techno">CSS</p>
                <p className="techno">JavaScript</p>
            </div>
        </article>
    )
};

export default Papilles;