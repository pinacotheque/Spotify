import { Container, Form, FormControl } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Cards from '../Home/Cards'

const Search = ({selected, changeSelected}) => {
    
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

    return(
        <Container className="offset-2  pl-0" >
        <Form id="searchBar" className="input-group mb-3 pt-4" >
            <FormControl 
                className="inputbar"
                onChange={(e) => { changeSelected(e.target.value) }}
                type="text" 
                placeholder="Search..." />
            </Form>

            <div className='d-flex flex-wrap justify-content-around'>
             {albums.length>0 &&
             albums.map((album) => (
               <Cards key={album.id} img={album.album.cover_big} title={album.title} id={album.album.id} album={album}/>
             ))} 
           </div>
        </Container>
    )
}

export default Search