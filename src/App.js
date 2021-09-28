import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Home/Navbar';
import Player from './components/Home/Player';
import Home from './components/Home/Home';
import Album from './components/Details/Album';
import ShowDetail from './components/Details/ShowDetail';
import { useState } from 'react'
import Search from './components/Search/Search';


function App() {

  const [selected, setSelected] = useState(null)

  return (
    <div >

      <Router>

        <Navbar selected={selected} changeSelected={(newCharacter) => setSelected(newCharacter)} />

        <Switch>

          <Route exact path='/'>
            <Home  selected={selected} />
          </Route>

          <Route exact path='/artist'>
            {/* <Artist/> */}
          </Route>


        </Switch>

        <Route  path='/album/:id' render={(routerProps) => <ShowDetail {...routerProps} selected={selected} />} />
        <Route exact path='/search' render={(routerProps) => <Search {...routerProps} selected={selected} changeSelected={(newCharacter) => setSelected(newCharacter)} />} />

        <Player />
      </Router>

    </div>
  );
}

export default App;
