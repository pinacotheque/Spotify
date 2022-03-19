import { Container, Form, Row, Col, ListGroup } from "react-bootstrap";
import { Heart, Pause, PlayCircle, ThreeDots } from "../svgs/Svgs";
import styles from "./Details.module.css";
import { useState } from "react";

const TrackList = ({ album }) => {
  const [playing, setPlaying] = useState(false);
  // const togglePlay = () => {
  //   setPlaying(!playing);
  //   playMusic();
  // };

  const playMusic = () => {
    let song = new Audio(album.preview);
    if (playing) {
      song.pause();
      console.log("stop");
    } else {
      song.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className={playing ? styles.trackDivChange : styles.trackDiv}>
      <Row className={styles.rowofCols}>
        <Col className="d-flex">
          <p className={styles.PlayCircle} onClick={playMusic}>
            {playing ? Pause() : PlayCircle()}
          </p>

          <div>
            <li className={styles.trackItem}>
              <h6> {album.title}</h6>
            </li>
            <p className={styles.trackArtist}>{album.artist.name}</p>
          </div>
        </Col>

        <Col className={styles.threeCol}>
          <Row className={styles.threeIcons}>
            <div className={styles.Heart}>{Heart()}</div>
            <div>{(album.duration / 60).toFixed(2)}</div>
            <h6 className={styles.ThreeDots}> {ThreeDots()}</h6>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default TrackList;
