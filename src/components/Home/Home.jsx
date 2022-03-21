import Cards from "./Cards";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [albums, setAlbums] = useState([]);

  const topBar = [
    "TRENDING",
    "PODCAST",
    "MOODS AND GENRES",
    "NEW RELEASES",
    "DISCOVER",
  ];

  useEffect(() => {
    const getMusic = async () => {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=hits",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":
              "7a40d8f461msh79f4f411e8e3ab7p1e0a92jsnd87ad8dc4b57",
          },
        }
      );
      let data = await response.json();
      setAlbums(data.data);
    };
    getMusic();
  }, []);

  return (
    <div className={styles.containerHome} class="offset-2">
      <div id={styles.contentHome}>
        <div className={styles.profile}>
          <h6>Profile</h6>
        </div>
        <div className="pt-5" style={{ zIndex: "1" }}>
          <ul className="nav nav-tabs justify-content-center">
            {topBar.map((link) => (
              <li className="nav-item pr-1">
                <a className="nav-link ">
                  <strong>{link}</strong>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="d-flex flex-wrap pl-5">
          {albums.length > 0 &&
            albums.map((album) => (
              <Cards
                key={album.id}
                img={album.album.cover_big}
                title={album.title}
                id={album.album.id}
                album={album}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
