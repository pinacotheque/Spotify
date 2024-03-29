import {
  Like,
  Shuffle,
  SkipStart,
  PlayCircle,
  SkipEnd,
  Repeat,
  Display,
  VolumeUp,
  Paragraph,
  Pause,
} from "../ui/svgs/Svgs";
import styles from "./Home.module.css";
import { useSelector } from "react-redux";

const Player = () => {
  const isPlaying = useSelector((state) => state.nowPlaying.isPlaying);
  const playingSong = useSelector((state) => state.nowPlaying.playingTitle);

  return (
    <footer id={styles.footer}>
      <div className="container-fluid d-flex">
        {/* now playing */}
        <div className="col-3 align-items-center ">
          <div className="row align-items-center ml-3">
            <img src={isPlaying ? playingSong.cover_small : ""} alt="radio" />
            <div className={styles.playingDetail}>
              <p id="nowPlaying " className=" mb-0">
                {isPlaying ? playingSong.title : "Title"}
              </p>
              <a className="nowPlaying">
                {" "}
                {isPlaying ? playingSong.artist.name : "Artist"}
              </a>
            </div>
            <Like />
          </div>
        </div>
        {/* song duration */}
        <div className="col-7 align-items-center">
          <div className="row justify-content-center align-items-center">
            <Shuffle />
            <SkipStart />
            {isPlaying ? <Pause /> : <PlayCircle />}
            <SkipEnd />
            <Repeat />
          </div>
          <div className="row justify-content-center">
            <div className="row songDur align-items-center my-1">
              <div className="col">
                <p
                  className="mb-0"
                  style={{ color: "#ffff", fontSize: "11px" }}
                >
                  00:00
                </p>
              </div>

              <div className="col">
                <hr className="my-0 longHr" />
              </div>
              <div className="col">
                <p
                  className="mb-0"
                  style={{ color: "#ffff", fontSize: "11px" }}
                >
                  00:00
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* volume settings */}
        <div className="col-2 d-flex align-items-center">
          <div className="row justify-content-center">
            {Paragraph()}
            {Display()}
            {VolumeUp()}
            <hr className="my-0 mx-2 align-self-center hrStyling" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Player;
