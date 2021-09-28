import {Card,Container,Col,Row} from 'react-bootstrap'
import Cards from './Cards'
import { useState, useEffect } from 'react'

const Home = ({selected}) => {

  const [albums, setAlbums] = useState([])

 
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
  
            </div>
            </div>
      </Container>
    )
    
}

export default Home