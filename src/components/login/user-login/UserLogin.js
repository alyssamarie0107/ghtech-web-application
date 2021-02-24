// ----------------------------------------------
// developed by: alyssa rodriguez
// email: amrrodriguez@ucdavis.edu
// ----------------------------------------------
import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import styles from './UserLogin.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// -- firebase imports
import firebase from "firebase/app";
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebaseApp from '../../../firebase/FirebaseConfig';

// setup google provider to support and access the auth library:
const firebaseAppAuth = firebaseApp.auth();

// for signing in with google
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class LoginSection extends Component {
    render() {
        const {
          user,
          signInWithGoogle,
        } = this.props;

        // if user successfully logins in, redirect to contacts screen
        if (user) {
            return <Redirect to = "/contacts"/>
        }
        return (
            <section id = {styles.LoginSection}>
                <h1 id = {styles.LoginHeader}>Please Login</h1>
                <Form id = {styles.EmailForm}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    {/* TODO: use Firebase to do email/pw authentication */}
                    <Button variant="primary" type="submit">
                        {/* "hacky" way of doing it... */}
                        {/* drawbacks: user can just press submit and they are directed to Links page */}
                        <Link id = {styles.SubmitBtn} to = "/contacts">Submit</Link>
                    </Button>
                    <Button id = {styles.GoogleBtn} variant="primary" onClick={signInWithGoogle}>Sign in with Google</Button>
                </Form>
            </section>
        );
    }
}

// wrap the export of the App component using the withFirebaseAuth HOC:
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(LoginSection);