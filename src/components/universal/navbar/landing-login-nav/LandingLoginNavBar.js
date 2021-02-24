// ----------------------------------------------
// developed by: alyssa rodriguez
// email: amrrodriguez@ucdavis.edu
// ----------------------------------------------

import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import styles from './LandingLoginNavBar.module.css'

const NavBar = () => {
    return (
        <Navbar bg = "dark" expand = "lg">
            <Navbar.Brand bsPrefix = {styles.NavBrand}>
                <Link id = {styles.NavLink1} className = {styles.NavLink} to = "/">GHTechTalk</Link>
            </Navbar.Brand>
        </Navbar>
    );
}

export default NavBar;