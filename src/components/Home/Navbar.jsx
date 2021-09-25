// import {} from 'react-bootstrap'
import image from '../assets/logo.png'
import { Collection, House, Install } from '../svgs/svgs'

const Navbar = ({selected, changeSelected})=>{
    return(
        <div md={2} className="sidebar" id="sidebar">
         <div className="col side px-3 pb-5" id="side">
          <div>
            <img
              className="mb-3"
              src={image}
              alt="spotify logo"
              id="logo"
            />
            <a href="/" className="items"> {House()} Home </a>

            <div id="searchBar" className="input-group my-3 ">
                    <input type="text" onChange={(e)=>changeSelected(e.target.value)} className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" id="button-addon2" >
                        <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fill-rule="evenodd"></path></svg>
                      </button>
                    </div>
            </div>

            <a href="#" className="items">{Collection()} Your Library</a>
          </div>
          <div>
            <a href="#" className="items">{Install()} Install App </a>
            <hr
              className="my-2"
              style={{
                color: 'rgb(131, 129, 129)',
                backgroundColor: 'rgb(131, 129, 129)'}}
            />
            <div className={"row align-items-center pb-4"}>
              <img  src="" />
            </div>
          </div>
        </div>
      </div>

    )
}

export default Navbar