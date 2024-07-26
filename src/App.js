import logo from './logo.svg';
import './App.css';
// import { Link, Route, BrowserRouter as Router, Routes, Switch } from 'react-router-dom';
import { Link, Route, HashRouter as Router, Routes, Switch } from 'react-router-dom';
import MusicPlayer from './component/MusicPlayer';
import Home from './component/Home';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Switch> */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/music-player' element={<MusicPlayer />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;







{/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}