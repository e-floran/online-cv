import Navbar from "./Navbar";
import "../style/header.css";

function Header(){
    return(
        <header>
            <h1 className="headerTitle">Floran Eiclies</h1>
            <Navbar />
            <h4 className="headerSubTitle">Développeur web</h4>
        </header>
    )
}

export default Header;