import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Home/Navbar';
import Player from './components/Home/Player';
import Home from './components/Home/Home';
import ShowDetail from './components/Details/ShowDetail';
import { useState } from 'react'
import Search from './components/Search/Search';
import Login from './components/Login/Login';
import Account from './components/Login/Account';
import Register from './components/Login/Register';
import Library from './components/YourLibrary/Library';

function App() {

  const [selected, setSelected] = useState(null)

  return (
    <div >

      <Router>

        <Route exact path='/account' render={(routerProps) => <Account />} />

        <Route exact path={['/', '/album/:id', '/search', '/library']} render={(routerProps) => <Navbar selected={selected} changeSelected={(newCharacter) => setSelected(newCharacter)} />} />
        <Route exact path={['/', '/album/:id', '/search', '/library']} render={(routerProps) => <Player />} />

        <Route exact path='/login' render={(routerProps) => <Login />} />
        <Route exact path='/library' render={(routerProps) => <Library />} />

        <Route exact path='/register' render={(routerProps) => <Register />} />

        <Switch>

          <Route exact path='/'>
            <Home selected={selected} />
          </Route>

          <Route exact path='/artist'>
            {/* <Artist/> */}
          </Route>

        </Switch>

        <Route path='/album/:id' render={(routerProps) => <ShowDetail {...routerProps} selected={selected} />} />
        <Route exact path='/search' render={(routerProps) => <Search {...routerProps} selected={selected} changeSelected={(newCharacter) => setSelected(newCharacter)} />} />

      </Router>

    </div>
  );
}

export default App;
