// ----------------------------------------------
// developed by: alyssa rodriguez
// email: amrrodriguez@ucdavis.edu
// ----------------------------------------------

import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ChatContainer from '../../universal/chat-container/ChatContainer';
import styles from './ChatRoom.module.css';

const ChatRoom = () => {
    return (
        <section id = {styles.ChatRoomSection}>
            {/* left side of screen, show contacts */}
            <div id = {styles.ContactsList}>
            <ListGroup>
                <ListGroup.Item action variant="secondary">George Hofstetter</ListGroup.Item>
                <ListGroup.Item action variant="secondary">Gerri Hofstetter</ListGroup.Item>
                <ListGroup.Item action variant="secondary">Rev. Diana McDaniel </ListGroup.Item>
                <ListGroup.Item action variant="secondary">Ndene Diallo</ListGroup.Item>
                <ListGroup.Item action variant="secondary">Alyssa Rodriguez</ListGroup.Item>
                <ListGroup.Item action variant="secondary">Lauren de Leon</ListGroup.Item>
                <ListGroup.Item action variant="secondary">Keana Jennelle</ListGroup.Item>
                <ListGroup.Item action variant="secondary">Kristiana Sunga</ListGroup.Item>
                <ListGroup.Item action variant="secondary">Catalina Navarro</ListGroup.Item>
                <ListGroup.Item action variant="secondary">Briley Wong</ListGroup.Item>
                <ListGroup.Item action variant="secondary">Eren Jaeger</ListGroup.Item>
                <ListGroup.Item action variant="secondary">Mikasa Ackermann</ListGroup.Item>
                <ListGroup.Item action variant="secondary">Armin</ListGroup.Item>
            </ListGroup>
            </div>
            {/* right side of screen, show chat messages */}
            <div id = {styles.ChatRoom}>
                {/* TODO: show different convos for each contact */}
                {/* when user presses on a contact, show the conversation the user is having with that contact */}
                <ChatContainer/>
            </div>

        </section>
    );
}

export default ChatRoom;