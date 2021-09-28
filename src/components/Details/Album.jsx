import { Container, Form, Row, Col, ListGroup } from 'react-bootstrap'
import TrackList from './TrackList'
import styles from './Details.module.css'
import { Clock } from '../svgs/svgs'
const Album = ({album}) => {
    
    return(
      <Container className="col-10 offset-2 pb-0 pt-4">
        <Row>
          <Col md={3}>
            <img src={album.cover_medium}/>
          </Col>
          <Col md={7} className={styles.albumInfoCol}>
            <h3 className={styles.albumTitle}>{album.title}</h3>
            <h6>{album.duration} - {album.release_date}</h6>
            <img src={album.cover_small} className={styles.littleArtistPic}/> <a href="">{album.artist.name}</a>
          </Col>
        </Row>
      
      <Col className="d-flex justify-content-between mt-5">
      <h6 ># TITLE</h6>
      <h6>{Clock()}</h6>
      </Col>
     
      <hr className={styles.hrLine}/>
        <Row>
          <Col>
          <ul className="pl-0">
             {album.tracks.data.length>0 &&
             album.tracks.data.map((album) => (
               <TrackList key={album.id} album={album}/>
             ))} 
         </ul>
          </Col>
        </Row>
      </Container>
    )
    
}

export default Album