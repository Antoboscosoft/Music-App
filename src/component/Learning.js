import React, { useState } from 'react';
import '../assert/stylesheets/MusicPlayer.css';

function Learning(name) {

    const [currentSong, setCurrentSong] = useState({
        title: 'Vena Vena',
        artists: 'Udit Narayan, S...',
        imageUrl: 'https://th.bing.com/th?id=OVP.8VP5IOOIPkgZJmhpHs4gRgEsDh&w=197&h=110&c=7&rs=1&qlt=90&o=6&pid=1.7',
    })

    const [isPlaying, setIsPlaying] = useState(false);

    const songs = [
        {
            title: 'Indian 2',
            artists: 'Anirudh Ravichander',
            imageUrl: 'https://th.bing.com/th/id/OIP.uAs-SbmeInyINUzl02DkWQAAAA?rs=1&pid=ImgDetMain',
        },
        {
            title: 'Michael',
            artists: 'MassTamilan Dev',
            imageUrl: 'https://th.bing.com/th/id/OIP.KsNMafvKjFzl2qR7iqT9sgHaNK?w=115&h=180&c=7&r=0&o=5&pid=1.7',
        },
        // ... other songs
    ];


    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleNextSong = () => {
        // Implement logic to play the next song
    };

    const handlePreviousSong = () => {
        // Implement logic to play the previous song
    };

    // 1. Add a counter
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        // setCounter(counter + 1);
        setCounter(prevCounter => prevCounter + 1);
    }
    const decrementCounter = () => {
        setCounter(counter - 1);
    }
    console.log("Counter", counter);


    // 2.ProfileComponent
    const [profile, setProfile] = useState({name: "Anto", age: 22});

    const updateAge = () => {
        console.log("Updating age", profile.age);
        // profile.age = 25;
        // setProfile(profile);
        setProfile({...profile, age:25});
        // setProfile(prevProfile => ({...prevProfile, age: 25}));
    };
    console.log("Current age", profile.age);

    // 3.Greetings
    const greetings = useState(`Hello, ${name}`);



    return (
        <div className='music-player'>
            <div className='top-bar'>
                <div className='nav-links'>
                    <a className='decoration-none' href='#'>Albums</a>
                    <a href='#'>Artists</a>
                    <a href='#'>Songs</a>
                    <a href='#'>Playlists</a>
                </div>
                counter
                <div>
                    <p>Counter: {counter}</p>
                    <button onClick={decrementCounter}>Increment - </button>
                    <button onClick={incrementCounter}>Increment + </button>
                </div>

                profile
                <div>
                    <p>Name: {profile.name}</p>
                    <p>Age: {profile.age}</p>
                    <button onClick={updateAge}>Update Age</button>
                </div>

                greetings
                <div>
                    <p>{greetings}</p>
                </div>
            </div>
        </div>
    )
}

export default Learning
