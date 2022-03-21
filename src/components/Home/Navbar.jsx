import image from "../assets/logo.png";
import { Collection, House, Search } from "../ui/svgs/Svgs";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ selected, changeSelected }) => {
  return (
    <div md={2} className="sidebar" id="sidebar">
      <div className="col side px-3 pb-5" id="side">
        <div>
          <img className="mb-3" src={image} id="logo" alt="spotify-logo" />
          <a href="/" className={styles.items}>
            {" "}
            {House()} Home{" "}
          </a>
          <a href="/search" className={styles.items}>
            {" "}
            {Search()} Search{" "}
          </a>
          <Link to="/library">{Collection()} Your Library</Link>
          <a href="/library" className={styles.items}></a>
        </div>
        <div>
          <hr
            className="my-2"
            style={{
              color: "rgb(131, 129, 129)",
              backgroundColor: "rgb(131, 129, 129)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
