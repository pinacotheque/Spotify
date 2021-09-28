import { Favourited, Shuffle, SkipStart, PlayCircle, SkipEnd, Repeat, Display, VolumeUp, Paragraph } from "../svgs/svgs.jsx"

const Player = () => {

return(

<footer id="footer-home">
    <div className="container-fluid d-flex">
    {/* now playing */}
        <div className="col-2 align-items-center ">
            <div className="row align-items-center ml-3">
                <img src="images/radio.png" />
                <div className="mx-3">
                <p id="nowPlaying"> Creep </p>
                <a className="nowPlaying">Radiohead</a>
                </div>
                {Favourited()}
            </div>
        </div>
    {/* song duration */}
        <div className="col-8 align-items-center">
            <div className="row justify-content-center align-items-center">
            {Shuffle()}
            {SkipStart()}
            {PlayCircle()}
            {SkipEnd()}       
            {Repeat()}
            </div>
            <div className="row justify-content-center">
            <div className="row songDur align-items-center my-1">
            <div className="col">
              <p className="mb-0" style={{color: "#ffff", fontSize: "10px"}}>00:00</p>
            </div>

            <div className="col">
              <hr className="my-0 longHr" />
            </div>
            <div className="col">
              <p className="mb-0" style={{color: "#ffff", fontSize: "10px"}}>7:18</p>
            </div>
          </div>
            </div>
        </div>
    {/* volume settings */}
        <div className="col-2 d-flex align-items-center">
            <div className="row justify-content-center">
            {Paragraph()}
            {Display()}
            {VolumeUp()}
            <hr className="my-0 mx-2 align-self-center hrStyling"/>
          </div>
        </div>
      </div>
</footer>
)}

export default Player

