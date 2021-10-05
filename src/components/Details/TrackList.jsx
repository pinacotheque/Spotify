import { Container, Form, Row, Col, ListGroup } from 'react-bootstrap'
import { Heart, PlayCircle, ThreeDots } from '../svgs/svgs'
import styles from './Details.module.css'

const TrackList = ({album}) => {
    return(
        <div className={styles.trackDiv}>

        <Row className={styles.rowofCols}>

        <Col className="d-flex">
        <p className={styles.PlayCircle}> {PlayCircle()}</p>
        
        <div>
            <li className={styles.trackItem}><h6> {album.title}</h6></li> 
            <p className={styles.trackArtist}>{album.artist.name}</p>
        </div>
        </Col>

        <Col className={styles.threeCol}>
            <Row className={styles.threeIcons}>
                <div className={styles.Heart}>
                {Heart()} 
                </div>
        <div>
        {(album.duration/60).toFixed(2)} 
        </div>
        <h6 className={styles.ThreeDots}> {ThreeDots()}</h6>
            </Row>
        </Col>

        </Row>

        </div>
    )
}

export default TrackList