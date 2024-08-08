import React, { useState } from 'react';
import indian2img from '../assert/images/profile-picture1.jpg';

function Artists() {
    const [currentAlbum, setCurrentAlbum] = useState({
        title: 'Indian 2',
        artist: 'Anirudh Ravichander',
        songs: [
            { title: 'Come Back India', duration: '3:37' },
            { title: 'Paaraa', duration: '4:20' },
            // ... other songs
        ],
        coverImage: {indian2img},
    });

    const [currentSong, setCurrentSong] = useState(currentAlbum.songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);

    };

    const handleNextSong = () => {
        // Implement logic to play the next song
    };

    const handlePreviousSong = () => {
        // Implement logic to play the previous song
    };

    const handleSeek = (e) => {
        // Implement logic to seek to the specified position
    };
  return (
    <div>
         <div className="music-player container">

            <div className="album-details row">
                <div className="album-cover col-md-4">
                    <img src={currentAlbum.coverImage} alt={currentAlbum.title} />
                </div>
                <div className="album-info col-md-8">
                    <h2>{currentAlbum.title}</h2>
                    <p>By {currentAlbum.artist}</p>
                    <ul>
                        {currentAlbum.songs.map((song, index) => (
                            <li key={index} onClick={() => setCurrentSong(song)} className={song === currentSong ? 'active' : ''}>
                                {song.title} ({song.duration})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="player-controls row">
                <div className="song-details col-md-4">
                    <img src={`https://example.com/${currentSong.title}.jpg`} alt={currentSong.title} />
                    <div>
                        <p>{currentSong.title}</p>
                        <p>{currentAlbum.artist}</p>
                    </div>
                </div>
                <div className="play-controls col-md-4 d-flex justify-content-center align-items-center">
                    <button onClick={handlePreviousSong}>Previous</button>
                    <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
                    <button onClick={handleNextSong}>Next</button>
                </div>
                <div className="progress-bar col-md-4">
                    <input type="range" min="0" max="100" value={currentTime} onChange={handleSeek} />
                </div>
                <div className="controls col-md-4 d-flex justify-content-end align-items-center">
                    <button>Shuffle</button>
                    <button>Repeat</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Artists