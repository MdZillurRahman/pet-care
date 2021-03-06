import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import logo from '../../../Images/icon.jpg';
import Profile from '../Profile/Profile';
import UserIcon from '../../../Images/user-icon.png';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
        navigate('/login');
    }

const showProfile=() =>{
    return <Profile></Profile>;
}

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img className='me-2' height={40} src={logo} alt="" /> Pet Care
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            { 
                                user ?
                                    <NavDropdown title={<img src={UserIcon} style={{ width: '30px' }} alt="" />} id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="profile" onClick={showProfile}>Profile
                                        </NavDropdown.Item>
                                        <button className='btn btn-link text-black text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                    </NavDropdown>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;