// import {} from 'react-bootstrap'

const Navbar = ()=>{
    return(
        <div md={2} className="sidebar">
         <div className="col side px-3 pb-5" id="side">
          <div>
            <img
              className="mb-3"
              src={'/assets/spotilogo.png'}
              alt="spotify logo"
              id="logo"
            />
            <a href="index.html" className="items"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-house-door mr-3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                />
              </svg>
              Home</a
            >




            <div id="searchBar" className="input-group my-3 ">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary" type="button" id="button-addon2" >
                        <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fill-rule="evenodd"></path></svg>
                      </button>
                    </div>
            </div>


            <a href="#" className="items"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-collection mr-3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"
                /></svg
              >Your Library</a
            >
          </div>
          <div>
            <a href="#" className="items"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-down-circle mr-3"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                /></svg
              >Install App</a
            >
            <hr
              className="my-2"
              style={{
                color: 'rgb(131, 129, 129)',
                backgroundColor: 'rgb(131, 129, 129)'}}
            />
            <div className={"row align-items-center pb-4"}>
              <img className={"d-flex"} src="images/tarkan.jpeg" id="tarkan" />
              <a className={"flex-row m-0"}>Tarkan </a>
            </div>
          </div>
        </div>
      </div>
     

    )
}
export default Navbar