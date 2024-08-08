import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Music Player</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#albums">Albums</Nav.Link>
                <Nav.Link href="#artists">Artists</Nav.Link>
                <Nav.Link href="#songs">Songs</Nav.Link>
                <Nav.Link href="#playlists">Playlists</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Header;
