import { useEffect, useState } from "react"
import Album from "./Album"

const ShowDetail = ({ match , selected }) => {

    const [info, setInfo] = useState(null)
   
    useEffect(() => {
        const getAlbumData = async () => {
            let id = match.id
            if (id) {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + id)
                let albumInfo = await response.json()
                console.log('showdetaildaki albuminfoyu yazir bakim',albumInfo)
                setInfo(albumInfo)
            }
        }
        getAlbumData()
    }, [match.params.id])

    return (
        <div>
            {
                info && <Album album={info} />
            }
        </div>
    )

}

export default ShowDetail