import { Container, Form, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import Cards from "../Home/Cards";
import styles from "./Search.module.css";

const Search = ({ selected, changeSelected }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const getMusic = async () => {
      let response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + selected,
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
      console.log(data);
      setAlbums(data.data);
    };
    getMusic();
  }, [selected]);

  return (
    <div className="offset-2 mr-0  pl-0" id={styles.searchContainer}>
      <Form id="searchBar" className="input-group mb-3 pt-4">
        <FormControl
          className="inputbar"
          onChange={(e) => {
            changeSelected(e.target.value);
          }}
          type="text"
          placeholder="Search..."
        />
      </Form>

      {selected ? (
        <div className="d-flex flex-wrap">
          {albums &&
            albums.length > 0 &&
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
      ) : (
        <h5 className="mt-5">Start searching!</h5>
      )}
    </div>
  );
};

export default Search;
