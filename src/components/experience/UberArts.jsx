function UberArts(){
    return(
        <article className="project">
            <h5 className="projectTitle"><a href="https://uberarts.netlify.app/">Uber Arts</a></h5>
            <h6 className="projectDate">octobre 2020</h6>
            <p>Pour ce premier hackathon, le thème choisi par notre école était de créer une application que nous pourrions apporter à une autre époque grâce à un voyage temporel. Nous avons imaginé un service de mise en relation entre rois et seigneurs du passé avec des artistes de différentes époques.</p>
            <a href="https://uberarts.netlify.app/"><img className="projectImage" src="/files/uber_arts.png" alt="Uber Arts"></img></a>
            <div className="technoContainer">
                <p className="techno">React</p>
                <p className="techno">CSS</p>
            </div>
        </article>
    )
};

export default UberArts;