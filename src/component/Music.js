import React, { useState } from 'react'
import { IconContext } from 'react-icons';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import useSound from 'use-sound';
import '../assert/stylesheets/MusicPlayer.css';
import aud1 from '../assert/audios/Kana-Kangiren.mp3';
import aud2 from '../assert/audios/Nee-Podhum-Enaku-MassTamilan.dev.mp3';
import aud3 from '../assert/audios/Orasaadha-Usurathan-MassTamilan.com.mp3';
import aud4 from '../assert/audios/Vena-Vena.mp3';
import Header from '../pages/Header';
import MainPage from '../pages/MainPage';
import Footer from '../pages/Footer';

const tracks = [aud1, aud2, aud3, aud4];
const trackNames = ['Kana Kangiren', 'Nee Podhum Enaku', 'Orasaadha Usurathan', 'Vena Vena'];

function Music() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  // const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [sound] = useSound(tracks[index], {
    volume,
    onplay: () => setPlaying(true),
    onpause: () => setPlaying(false),
    onstop: () => setPlaying(false),
    onfinish: () => {
      setIndex((index + 1) % tracks.length);
      setPlaying(true);
    },
    // onload: ({ duration }) => setDuration(duration),
    ontimeupdate: ({ position }) => setPosition(position),
  });

  const togglePlay = () => (playing ? sound.pause() : sound.play());

  const nextSong = () => {
    setIndex((index + 1) % tracks.length);
    setPlaying(true);
  };

  const previousSong = () => {
    setIndex((index - 1 + tracks.length) % tracks.length);
    setPlaying(true);
  };

  const handleSeek = e => {
    const seekPosition = e.target.value / 100;
    // setPosition(seekPosition * duration);
    // sound.seek(seekPosition * duration);
  };

  const handleVolume = e => {
    setVolume(e.target.value / 100);
  };

  const handleClose = () => {
    setPlaying(false);
    sound.stop();
    setPosition(0);
  };


  return (
    // <div className="container">
        <div className="App">
            <Header />
            <MainPage />
            <Footer />
        {/* </div> */}
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Music</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Albums</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/artists">Artists</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/songs">Songs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/playlists">Playlists</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-8">
          <img src={tracks[index].cover} className="musicCover" alt="musicCover" />
          <h3>{trackNames[index]}</h3>
        </div>
        <div className="col-md-4">
          <IconContext.Provider value={{ color: '#101010', className: 'react-icons' }}>
            <div className="d-flex justify-content-center align-items-center">
              {playing ? <AiFillPauseCircle onClick={togglePlay} className="playButton" /> : <AiFillPlayCircle onClick={togglePlay} className="playButton" />}
              <BiSkipPrevious onClick={previousSong} className="playButton" />
              <BiSkipNext onClick={nextSong} className="playButton" />
            </div>
          </IconContext.Provider>
          <input type="range" min={0} max={1} step={0.01} value={position / duration} onChange={handleSeek} />
          <input type="range" min={0} max={1} step={0.01} value={volume} onChange={handleVolume} />
        </div>
      </div>
      <footer className="footer">
        {playing && (
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: `${(position / duration) * 100}%` }} aria-valuenow={(position / duration) * 100} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        )}
        <button className="close-button" onClick={handleClose}>Close</button>
      </footer> */}
    </div>
  );
}

export default Music
