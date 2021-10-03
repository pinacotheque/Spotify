import {Card,Container,Col,Row} from 'react-bootstrap'
import Cards from './Cards'
import { useState, useEffect } from 'react'
import styles from './Home.module.css'

const Home = () => {

  const [albums, setAlbums] = useState([])

 
    const topBar = [ "TRENDING", "PODCAST", "MOODS AND GENERES", "NEW RELEASES", "DISCOVER"]

    useEffect(() => {
      const getMusic = async () => {
          let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + 'trends')
          let data = await response.json()
          console.log(data)
          setAlbums(data.data)
      }
          getMusic()
    }, [])
      
    return  (
      <Container> 
        <div id="contentHome" className="offset-2 pl-0">
          <div className={styles.profile}> <h6>Profile</h6> </div>
          <div className="pt-5" style={{zIndex:'1'}}>
            <ul className="nav nav-tabs justify-content-center">
              {topBar.map((link)=> (<li className="nav-item pr-1">
                <a className="nav-link "><strong>{link}</strong></a>
              </li>))}
            </ul>
          </div>
            
            <div className='d-flex flex-wrap justify-content-around'>
            {albums.length>0 &&
             albums.map((album) => (
               <Cards key={album.id} img={album.album.cover_big} title={album.title} id={album.album.id} album={album}/>
             ))} 
            </div>
            </div>
      </Container>
    )
    
}

export default Home