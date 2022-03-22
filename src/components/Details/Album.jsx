import { Container, Row, Col } from "react-bootstrap";
import TrackList from "./TrackList";
import styles from "./Details.module.css";
import { Clock } from "../ui/svgs/Svgs";
const Album = ({ album }) => {
  return (
    <div>
      {album && (
        <Container className="col-10 offset-2 pb-0 pt-4">
          <Row className={styles.albumImageRow}>
            <Col md={3}>
              <img src={album.cover_medium} alt="album-cover" />
            </Col>
            <Col md={7} className={styles.albumInfoCol}>
              <h3 className={styles.albumTitle}>{album.title}</h3>

              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src={album.cover_small}
                    className={styles.littleArtistPic}
                    alt="artist"
                  />{" "}
                  <a href="" className="px-2">
                    {album.artist?.name}
                  </a>
                  &#8226; {"   "}
                </div>
                <h6 className="pl-2 m-0">
                  {album.nb_tracks} {album.nb_tracks > 1 ? "songs" : "song"}{" "}
                  &#8226; {album.release_date}
                </h6>
              </div>
            </Col>
          </Row>

          <Col className="d-flex justify-content-between mt-5 pr-5">
            <h6 className="pl-3">TITLE</h6>
            <h6 className="pr-3">{Clock()}</h6>
          </Col>

          <hr className={styles.hrLine} />
          <Row className={styles.detailsRow}>
            <Col>
              <ul className="pl-0 ">
                {album.tracks?.data?.length > 0 &&
                  album.tracks.data.map((album) => (
                    <TrackList key={album.id} album={album} />
                  ))}
              </ul>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Album;
