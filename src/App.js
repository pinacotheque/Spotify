import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Player from './components/Player';
import Home from './components/Home';


function App() {
  return (
    <div >
      
      <Router>

      <Navbar/>

      <Home/>

      <Player/>

      <Route exact path = '/artist'>
        {/* <Artist/> */}
        </Route>

      <Route exact path = '/album'>
          {/* <Album/> */}
      </Route>

      </Router>

    </div>
  );
}

export default App;
