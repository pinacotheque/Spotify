import { useEffect, useState } from "react"
import Album from "./Album"

const ShowDetail = ({ match , history }) => {

    const [info, setInfo] = useState(undefined)
   
    useEffect(() => {
        const getAlbumData = async () => {
            let id = match.id
            if (match.isExact) {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + match.params.id)
                let albumInfo = await response.json()
                console.log('showdetail',albumInfo)
                setInfo(albumInfo)
            }
        }
        getAlbumData()
    }, [])

    return (
        <div>
            {
                info && <Album album={info} />
            }
        </div>
    )

}

export default ShowDetail