import {Card,Container,Col,Row} from 'react-bootstrap'
import Cards from './Cards'
import { useState, useEffect } from 'react'

const Home = ({selected}) => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
      const getMusic = async () => {
        
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + selected)
            
                let data = await response.json()
                console.log(data)
                setAlbums(data.data)
      }
          getMusic()
        }, [selected])
        
      const topBar = [ "TRENDING", "PODCAST", "MOODS AND GENERES", "NEW RELEASES", "DISCOVER"]
      
      return  (
        <Container> 
        <div id="contentHome" className="offset-2  ">
          
          <div className="pt-4" style={{zIndex:'1'}}>
            <ul className="nav nav-tabs justify-content-center">
              {topBar.map((link)=> (<li className="nav-item pr-1">
                <a className="nav-link "><strong>{link}</strong></a>
              </li>))}
            </ul>
          </div>
            
            <div className='d-flex flex-wrap '>
            
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