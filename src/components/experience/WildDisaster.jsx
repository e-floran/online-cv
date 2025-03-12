function WildDisaster(){
    return(
        <article className="project">
            <h5 className="projectTitle"><a href="https://wild-disaster.netlify.app/">Wild Disaster</a></h5>
            <h6 className="projectDate">octobre 2020 - novembre 2020</h6>
            <p>Pour ce deuxième projet de ma formation à la Wild code school, l'accent était mis sur l'exploitation d'une API tout en utilisant React. Mon groupe a choisi l'API Eonet de la Nasa pour créer une application de suivi des évènements climatiques à l'échelle planétaire.</p>
            <a href="https://wild-disaster.netlify.app/"><img className="projectImage" src="/files/wild_disaster.png" alt="Wild Disaster"></img></a>
            <div className="technoContainer">
                <p className="techno">React</p>
                <p className="techno">CSS</p>
            </div>
        </article>
    )
};

export default WildDisaster;