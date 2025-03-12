import Description from "../components/home/Description";
import KnowMe from "../components/home/KnowMe";
import Contact from "../components/Contact";
import useWindowSize from "../hooks/useWindowSize.tsx";
import "../style/home.css";
export default function Home() {
  const width = useWindowSize();
  return (
    <div className="pageContainer homePage">
      <Description />
      <img
        className="profilePic"
        src={
          width > 800
            ? "/files/floran_eiclies.png"
            : "/files/floran_eiclies_mobile.png"
        }
        alt="Floran Eiclies"
      ></img>
      <KnowMe />
      <Contact />
    </div>
  );
}
