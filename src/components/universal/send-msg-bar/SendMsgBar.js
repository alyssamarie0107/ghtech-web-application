// ----------------------------------------------
// developed by: alyssa rodriguez
// email: amrrodriguez@ucdavis.edu
// ----------------------------------------------

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './SendMsgBar.module.css';

const SendMessageBar = (props) => {
    return (
        <div id = {styles.SendMessageBar}>
            <Form>
                <Form.Group id = {styles.Form}>
                    <Form.Control type="text" placeholder="Enter your message..." />
                    <Button id = {styles.SubmitBtn} variant="primary" type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default SendMessageBar