import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Player from './components/Player';
import Home from './components/Home';
import Album from './components/Album';
import ShowDetail from './components/ShowDetail';
import {useState} from 'react'


function App() {

  const [selected, setSelected] = useState(null)

  return (
    <div >
      
      <Router>

        <Navbar selected ={selected} changeSelected={(newCharacter) => setSelected(newCharacter)}/>
      
          <Switch>

            <Route exact path = '/'>
              <Home selected={selected} />
            </Route>

            <Route exact path = '/artist'>
              {/* <Artist/> */}
            </Route>

            <Route exact path = '/album/:id' render={(routerProps) => <ShowDetail {...routerProps} selected={selected}/>} />
              
          

          </Switch>


      </Router>

    </div>
  );
}

export default App;
