function Cabinet(){
    return(
        <article className="project">
            <h5 className="projectTitle"><a href="https://cabinet-hackathon.netlify.app/">Cabi.net</a></h5>
            <h6 className="projectDate">janvier 2021</h6>
            <p>Le défi principal, pour ce deuxième hackathon, était de créer un site marchant en optimisant son SEO, le tout en 48 heures. Il nous était également demandé de trouver une thématique décalée pour ce site marchand. Mon équipe et moi avons alors inventé Cabi.net, un site de vente de toilettes. Pour contrer les problématique de référencement liées à React, nous avons ajouté React Helmet et React Snap.</p>
            <a href="https://cabinet-hackathon.netlify.app/"><img className="projectImage" src="/files/cabinet.png" alt="Cabi.net"></img></a>
            <div className="technoContainer">
                <p className="techno">React</p>
                <p className="techno">React Helmet</p>
                <p className="techno">React Snap</p>
            </div>
        </article>
    )
};

export default Cabinet;