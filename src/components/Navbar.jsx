import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    const [open, setOpen] = useState(false);
    const handleOpen = () =>{
        if (open){
            setOpen(false);
        } else{
            setOpen(true);
        };
    }
    return(
        <nav className="headerMenu">
            <button className="headerButton" type="button" onClick={handleOpen}>Menu</button>
            <ul className="headerList">
                <li className={
                    open?"displayed" : ""
                } onClick={handleOpen}><Link to={`/`}>Accueil</Link></li>
                <li className={
                    open?"displayed" : ""
                } onClick={handleOpen}><Link to={`/skills`}>Compétences</Link></li>
                <li className={
                    open?"displayed" : ""
                } onClick={handleOpen}><Link to={`/education`}>Formations</Link></li>
                <li className={
                    open?"displayed" : ""
                } onClick={handleOpen}><Link to={`/experience`}>Expériences</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;