import {Component} from 'react'
import {Card,Container,Col,Row} from 'react-bootstrap'
import Cards from './Cards'


class Home extends Component {

    state = {
        albums:[]
    }

    componentDidUpdate =async () => {

        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + this.props.selected)
            if (response.ok) {
                let data = await response.json()
                
                console.log(data)
                this.setState({
                    albums: data.data
                })
               
            }
        } catch (e) {
            console.log(e)
        }
    }

    render() {
      return  (

        <Container> 

        <div id="contentHome" className="offset-2  ">
            
              <div className="pt-4" style={{zIndex:'1'}}>
                <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item pr-1">
                      <a className="nav-link "><strong>TRENDING</strong></a>
                    </li>
                    <li className="nav-item pr-1">
                      <a className="nav-link"><strong>PODCAST</strong></a>
                    </li>
                    <li className="nav-item pr-1">
                      <a className="nav-link"><strong>MOODS AND GENERES</strong></a>
                    </li>
                    <li className="nav-item pr-1">
                      <a className="nav-link"><strong>NEW RELEASES</strong></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><strong>DISCOVER</strong></a>
                    </li>
                  </ul>
            </div>
            


            <div className='d-flex flex-wrap '>
            
             {this.state.albums &&
              this.state.albums.map((album) => (
                <Cards key={album.id} img={album.album.cover_big} title={album.title} id={album.album.id} />
              ))}
         
            </div>
            </div>
        </Container>
      )
    }

}

export default Home