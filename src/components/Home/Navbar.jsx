import image from '../assets/logo.png'
import { Container, Form, FormControl } from 'react-bootstrap'
import { Collection, House, Install,Search } from '../svgs/svgs'

const Navbar = ({selected, changeSelected})=>{
    return(
        <div md={2} className="sidebar" id="sidebar">
         <div className="col side px-3 pb-5" id="side">
          <div>
            <img className="mb-3" src={image} id="logo"/>
            <a href="/" className="items"> {House()} Home </a>
            <a href="/search" className="items"> {Search()} Search </a>
            <a href="#" className="items">{Collection()} Your Library</a>
          </div>
          <div>
            <a href="#" className="items">{Install()} Install App </a>
            <hr
              className="my-2"
              style={{
                color: 'rgb(131, 129, 129)',
                backgroundColor: 'rgb(131, 129, 129)'}}/>
            <div className={"row align-items-center pb-4"}>
              <img  src="" />
            </div>
          </div>
        </div>
      </div>

    )
}

export default Navbar