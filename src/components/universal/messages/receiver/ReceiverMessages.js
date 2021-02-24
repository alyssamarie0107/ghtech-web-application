// ----------------------------------------------
// developed by: alyssa rodriguez
// email: amrrodriguez@ucdavis.edu
// ----------------------------------------------

import React from 'react';
import styles from './ReceiverMessages.module.css';

const ReceiverMessages = (props) => {
    return(
        <div id = {styles.ReceiverMessagesContainer}>
            <div id = {styles.ReceiverMessages}>{props.children}</div>
        </div>
    );
}

export default ReceiverMessages;