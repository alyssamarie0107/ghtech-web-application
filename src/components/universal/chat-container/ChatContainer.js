// ----------------------------------------------
// developed by: alyssa rodriguez
// email: amrrodriguez@ucdavis.edu
// ----------------------------------------------

import React from 'react';
import ReceiverMessages from '../../universal/messages/receiver/ReceiverMessages';
import SenderMessages from '../../universal/messages/sender/SenderMessages';
import SendMessageBar from '../send-msg-bar/SendMsgBar';
import styles from './ChatContainer.module.css';

const ChatContainer = (props) => {
    return (
        <div>
        <div id = {styles.MessageContainer}>
            {/* TODO:  create data sets and services that dynamically allow user to send a message to a contact */}
            {/* hard coded for now */}
            <ReceiverMessages>Hey, how've you been?</ReceiverMessages>
            <SenderMessages>Hi! It's so nice to hear from you. It's been awhile. I'm doing pretty good, hby?</SenderMessages>
            <ReceiverMessages>I'm doing well too, thank you for asking. It has been awhile, let's grab coffee and catch up soon!</ReceiverMessages>
            <SenderMessages>I'm down! When are you free next?</SenderMessages>
            <ReceiverMessages>How about Friday? Around 10am? What coffee shop were you thinking?</ReceiverMessages>
            <SenderMessages>I'm free Friday! and ouuu... how about Philz?!</SenderMessages>
            <ReceiverMessages>Yay! Let's do Friday then, I can't wait to see you :D</ReceiverMessages>
            <ReceiverMessages>and Philz sounds good! I love it there.</ReceiverMessages>
            <SenderMessages>I can't wait to see you too! I'll see you Friday :)</SenderMessages>
            <ReceiverMessages>Goodmorning! I am here.</ReceiverMessages>
            <SenderMessages>On my way</SenderMessages>
            
        </div>
        <SendMessageBar/>
        </div>
    );
}

export default ChatContainer;