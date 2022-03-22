import { useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import {
  FilledHeart,
  Heart,
  Pause,
  PlayCircle,
  ThreeDots,
} from "../ui/svgs/Svgs";
import styles from "./Details.module.css";
import { useState, useRef } from "react";
import { addToLike, removeFromLike, playSong } from "../../Redux/actions";
import { useSelector } from "react-redux";

const TrackList = ({ album }) => {
  const likedSongs = useSelector((state) => state.likedSongs);

  const playingSong = useSelector((state) => state.nowPlaying.playingTitle);

  let song = useRef(new Audio(playingSong.preview));

  const dispatch = useDispatch();
  const [playing, setPlaying] = useState(false);

  const likeHandler = () => {
    if (likedSongs.includes(album)) {
      dispatch(removeFromLike(album.id));
    } else {
      dispatch(addToLike(album));
    }
  };
  const playHandler = () => {
    dispatch(playSong(album));
    song.current.play();
  };

  const PlayMusicHandler = () => {
    if (playingSong.id === album.id) {
      song.current.pause();
    } else {
      playHandler();
    }
    setPlaying(!playing);
  };

  return (
    <div className={playing ? styles.trackDivChange : styles.trackDiv}>
      <Row className={styles.rowofCols}>
        <Col className="d-flex">
          {/* <audio src={playingSong.preview}></audio> */}
          <p className={styles.PlayCircle} onClick={PlayMusicHandler}>
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
            <div className={styles.Heart} onClick={likeHandler}>
              {likedSongs.includes(album) ? <FilledHeart /> : <Heart />}
            </div>
            <div>{(album.duration / 60).toFixed(2)}</div>
            <h6 className={styles.ThreeDots}> {ThreeDots()}</h6>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default TrackList;
