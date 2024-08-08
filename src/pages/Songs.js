import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';


function Songs() {
  const { handleSongSelect } = useOutletContext();

    const [songs] = useState([
        { title: 'Come Back India', 
          artist: 'Isaimini Dev', 
          duration: '3:37' 
        
        },
        { title: 'Nee Podhum Enaku', 
          artist: 'Pradeep Kumar-MassTamilan.dev', 
          duration: '3:46' 

        },
        { title: 'Orasaadha Usurathan', 
          artist: 'Vivek Mervin-MassTamilan.com', 
          duration: '4:01' 
        
        },
        { title: 'Vena Vena', 
          artist: 'Udit Narayan, Sadhana Sargam-MassTamilan.com', 
          duration: '4:42' 
        
        },
      ]);
    
      const [currentSong, setCurrentSong] = useState(songs[0]);
      const [isPlaying, setIsPlaying] = useState(false);
    
      const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
      };
    
      const handleNextSong = () => {
        // Implement logic to play the next song
      };
    
      const handlePreviousSong = () => {
        // Implement logic to play the previous song
      };

  return (
    <div>
        <div className="music-player">
      {/* <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Albums</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Artists</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Songs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Playlists</a>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-light me-2">Search</button>
            <button className="btn btn-outline-light">Settings</button>
          </div>
        </div>
      </nav> */}

      <div className="song-list">
        {songs.map((song, index) => (
          <div key={index} className="song-item">
            <div className="song-info">
              <span>{song.title}</span>
              <span>{song.artist}</span>
            </div>
            <div className="song-duration">{song.duration}</div>
          </div>
        ))}
      </div>

      <div className="player-controls">
        <div className="song-details">
          <img src={`https://example.com/${currentSong.title}.jpg`} alt={currentSong.title} />
          <div>
            <p>{currentSong.title}</p>
            <p>{currentSong.artist}</p>
          </div>
        </div>
        <div className="play-controls">
          <button onClick={handlePreviousSong}>Previous</button>
          <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
          <button onClick={handleNextSong}>Next</button>
        </div>
        <div className="progress-bar">
          {/* Implement progress bar */}
        </div>
        <div className="controls">
          <button>Shuffle</button>
          <button>Repeat</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Songs