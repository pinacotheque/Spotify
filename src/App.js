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
      </Router>

    </div>
  );
}

export default App;
