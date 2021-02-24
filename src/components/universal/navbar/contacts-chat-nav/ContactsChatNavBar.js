// ----------------------------------------------
// developed by: alyssa rodriguez
// email: amrrodriguez@ucdavis.edu
// ----------------------------------------------

import React from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import styles from './ContactsChatNavBar.module.css'
import firebaseApp from '../../../../firebase/FirebaseConfig'

const NavBar = () => {
    return (
        <Navbar bg = "dark" expand = "lg">
            <Navbar.Brand bsPrefix = {styles.NavBrand}>
                <Link id = {styles.NavLink1} className = {styles.NavLink} to = "/">GHTechTalk</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
            <Navbar.Collapse id = "basic-navbar-nav">
                <Nav className = "mr-auto">
                    <Link className = {styles.NavLink2} to = "/contacts">Contacts</Link>
                    <Link className = {styles.NavLink2} to = "/chat">Chat</Link>
                </Nav>
                {/* when user clicks on signout, use Firebase auth module to handle signing out user */}
                <Button bsPrefix = {styles.LoginBtn} variant="outline-warning" onClick = {() => firebaseApp.auth().signOut()}>
                    {/* bring user to home screen when they sign out */}
                    <Link id = {styles.NavLink3} to = "/">Sign Out</Link> 
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );

}

export default NavBar;