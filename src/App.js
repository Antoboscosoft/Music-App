import logo from './logo.svg';
import './App.css';
// import { Link, Route, BrowserRouter as Router, Routes, Switch } from 'react-router-dom';
import { Link, Route, HashRouter as Router, Routes, Switch } from 'react-router-dom';
import MusicPlayer from './component/MusicPlayer';
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import MusicPlayer1 from './component/MusicPlayer1';
import Profile from './component/Profile';
import MySettings from './component/MySettings';
import Artists from './pages/Artists';
import Songs from './pages/Songs';
import Playlists from './pages/Playlists';
import Albums from './pages/Albums';
import Music from './component/Music';
import Header from './pages/Header';
import MainPage from './pages/MainPage';
import Footer from './pages/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Login1 from './pages/Login1';
import BouncingBall from './pages/BouncingBall';
// import CardDev from './pages/CardDev';


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Switch> */}
        <Routes>
          {/* <Route path='/' element={<Home />}> */}
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='profile' element={<Profile />}>Profile</Route>
            <Route path='mysettings' element={<MySettings />}>MySettings</Route>
          </Route>
          <Route path='BouncingBall' element={<BouncingBall/>}></Route>
          {/* <Route path='cardDev' element={<CardDev/>}></Route> */}
          <Route path='login' element={<Login/>}></Route>
          <Route path='login1' element={<Login1/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='/music-player' element={<MusicPlayer />}></Route>
          <Route path='music' element={<Music />}></Route>
          <Route path='header' element={<Header/>} />
          <Route path='main-page' element={<MainPage/>} />
          <Route path='footer' element={<Footer/>} />
          <Route path='/music-player1' element={<MusicPlayer1 />}>
            <Route path='albums' element={<Albums />}></Route>
            <Route path='artists' element={<Artists />}></Route>
            <Route path='songs' element={<Songs />}></Route>
            <Route path='playlists' element={<Playlists />}></Route>
          </Route>
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