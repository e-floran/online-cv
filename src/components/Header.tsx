import Navbar from "./Navbar.tsx";
import "../style/header.css";

export default function Header() {
  return (
    <header>
      <h1 className="headerTitle">Floran Eiclies</h1>
      <Navbar />
      <h4 className="headerSubTitle">Développeur web</h4>
    </header>
  );
}
