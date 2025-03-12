function Portfolio(){
    return(
        <article className="project">
            <h5 className="projectTitle"><a href="https://floran-eiclies.netlify.app/">Portfolio</a> <span><span className="miniPulsar" style={{animation: `pulsed 2s linear 0.5s infinite`}}/><span className="miniPulsar" style={{animation: `pulsed 2s linear 0.75s infinite`}}/><span className="miniPulsar" style={{animation: `pulsed 2s linear 1s infinite`}}/></span></h5>
            <h6 className="projectDate">depuis novembre 2020</h6>
            <p>Objectif évident pour ce premier projet personnel (que vous consultez actuellement) avec lequel je vise à mettre en avant mes capacités. Il a été pensé évolutif et utilise React.</p>
            <a href="https://floran-eiclies.netlify.app/"><img className="projectImage" src="/files/portfolio.png" alt="Portfolio"></img></a>
            <div className="technoContainer">
                <p className="techno">React</p>
                <p className="techno">CSS</p>
            </div>
        </article>
    )
};

export default Portfolio;