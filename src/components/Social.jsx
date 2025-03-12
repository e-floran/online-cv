import {useState} from "react";

function Social(){
    const [hoveredLinkedin, setHoveredLinkedin] = useState(false);
    const [hoveredGithub, setHoveredGithub] = useState(false);
    const handleHover= (e) =>{
        if(e.target.id==="linkedin"){
            setHoveredLinkedin(true);
        } else if(e.target.id==="github"){
            setHoveredGithub(true);
        }
    };
    const handleLeave= (e) =>{
        if(e.target.id==="linkedin"){
            setHoveredLinkedin(false);
        } else if(e.target.id==="github"){
            setHoveredGithub(false);
        }
    };
    return(
        <article className="socialContainer">
            <a href="https://www.linkedin.com/in/floran-eiclies/" id="linkedinLink">
                <img src={
                hoveredLinkedin
                ? "/files/linkedin_lightBlue.png"
                : "/files/linkedin_whitish.png"
                } alt="Linkedin" className="socialIcons" id="linkedin" onMouseOver={handleHover} onMouseOut={handleLeave}></img>
            </a>
            <a href="https://github.com/e-floran" id="githubLink">
                <img src={
                hoveredGithub
                ? "/files/github_lightBlue.png"
                : "/files/github_whitish.png"
                } alt="Github" className="socialIcons" id="github" onMouseOver={handleHover} onMouseOut={handleLeave}></img>
            </a>
        </article>
    )
};

export default Social;