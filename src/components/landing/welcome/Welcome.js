// ----------------------------------------------
// developed by: alyssa rodriguez
// email: amrrodriguez@ucdavis.edu
// ----------------------------------------------

import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import styles from './Welcome.module.css';

const Welcome = () => {
    return (
        <section id = {styles.WelcomeSection}>
            <div id = {styles.WelcomeContentContainer}>
                <h1 id = {styles.WelcomeContent}>
                    Welcome to <span>GHTechTalk</span>
                    <hr/>
                    Web <span>Messaging App</span> <br/>
                    <Button bsPrefix = {styles.LoginBtn} variant="outline-warning">
                        {/* when user clicks on login button, bring user to login screen */}
                        <Link id = {styles.NavLink} to = "/login">Login</Link>
                    </Button>
                </h1>
            </div>
        </section>
    );
}

export default Welcome;