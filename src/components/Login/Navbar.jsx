import { Nav, Container, Navbar } from 'react-bootstrap'
import image from '../assets/logo.png'
import styles from './Login.module.css'


const UpperBar = () => {
    return(
    <Navbar className={styles.navContainer}>
        <Container >
        <Navbar.Brand href="#home"><img className="pb-0" src={image} id="logo"/></Navbar.Brand>
        <Nav className="me-auto text-white">
          <Nav.Link className="text-white" href="#home">Premium</Nav.Link>
          <Nav.Link className="text-white" href="#features">Support</Nav.Link>
          <Nav.Link className="text-white" href="#pricing">Download</Nav.Link>
          <Nav.Link className="text-white" href="login">Login</Nav.Link>
          <Nav.Link className="text-white" href="register">Sign Up</Nav.Link>

        </Nav>
        </Container>
      </Navbar>
    )
}

export default UpperBar