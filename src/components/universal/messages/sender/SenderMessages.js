// ----------------------------------------------
// developed by: alyssa rodriguez
// email: amrrodriguez@ucdavis.edu
// ----------------------------------------------

import React from 'react';
import styles from './SenderMessages.module.css';

const SenderMessages = (props) => {
    return(
        <div id = {styles.SenderMessagesContainer}>
            <div id = {styles.SenderMessages}>{props.children}</div>
        </div>
    );
}

export default SenderMessages;