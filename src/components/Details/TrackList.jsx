import { Container, Form, Row, Col, ListGroup } from 'react-bootstrap'
import { Heart, ThreeDots } from '../svgs/svgs'
import styles from './Details.module.css'

const TrackList = ({album}) => {
    return(
        <div className={styles.trackDiv}>

        <Row className={styles.rowofCols}>

        <Col>
        <li className={styles.trackItem}><h6>{album.title}</h6></li> 
        <p className={styles.trackArtist}>{album.artist.name}</p>
        </Col>

        <Col className={styles.threeIcons}>
        <h6 className="mb-0">{Heart()} {(album.duration/60).toFixed(2)} {ThreeDots()}</h6>
        </Col>

        </Row>

        </div>
    )
}

export default TrackList