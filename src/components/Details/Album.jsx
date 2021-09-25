

const Album = ({album}) => {
    
    return(
        <div id="content" className="col-12 offset-2 col-xl-10 pb-0 ">
          <div className="container">
            <div className="row">
              
              <div className="col-12 col-sm-12 col-md-4 p-0 mt-5 ">

                <div className="d-flex align-center justify-content-center">
                  <a href="artist.html"><img id="queen" className="w-60 img-fluid"
                    src={album.cover_big}
                    className="d-block float-end" alt="..."/></a>
                  </div>
                  <h5 className="queen-II text-center mt-2">(Queen II Deluxe Edition 2011 Remaster)</h5>
                  <p className="small text-center mt-1">{album.title}</p>
                    <div className="text-center">
                        <button type="button" className="btn badge-pill btn-success btn-sm myBtn">PLAY</button>
                    </div>
                  <p className="small text-center  ">1974 . 16 SONGS</p>
                 <div className="text-center"> 
                 <i className="far fa-heart extra mr-2"></i>
                  <i className="fas fa-ellipsis-h extra "></i>
                </div>
            
              </div>
            
              <div id="albumList" className="col-12 col-sm-12 col-md-8 mt-4  ">
                <table className="table table-borderless ">

                    <tbody id="music-album">
                        <tr scope="row ">
                        <td><i className="fas fa-music"></i></td>
                        <td className="col "> <a href="#">Procession-Remastered 2011</a> 
                        <p>Queen</p></td>
                        <td className="col duration">1:13</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        </div>
        )
}

export default Album