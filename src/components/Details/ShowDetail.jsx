import { useEffect, useState } from "react";
import Album from "./Album";

const ShowDetail = ({ match, history }) => {
  const [info, setInfo] = useState(undefined);

  useEffect(() => {
    const getAlbumData = async () => {
      if (match.isExact) {
        let response = await fetch(
          "https://deezerdevs-deezer.p.rapidapi.com/album/" + match.params.id,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
              "x-rapidapi-key":
                "7a40d8f461msh79f4f411e8e3ab7p1e0a92jsnd87ad8dc4b57",
            },
          }
        );
        let albumInfo = await response.json();
        console.log("showdetail", albumInfo);
        setInfo(albumInfo);
      }
    };
    getAlbumData();
  }, []);

  return <div>{info && <Album album={info} />}</div>;
};

export default ShowDetail;
