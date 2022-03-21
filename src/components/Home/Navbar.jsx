import image from "../assets/logo.png";
import { Collection, House, Search } from "../ui/svgs/Svgs";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ selected, changeSelected }) => {
  return (
    <div md={2} className="sidebar" id="sidebar">
      <div className="col side px-3 pb-5" id="side">
        <div>
          <Link to="/">
            <img className="mb-3" src={image} id="logo" alt="logo" />
          </Link>
          <Link to="/">{House()} Home </Link>
          <Link to="/search">{Search()} Search </Link>
          <Link to="/library">{Collection()} Your Library</Link>
          <a href="/library" className={styles.items}></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
