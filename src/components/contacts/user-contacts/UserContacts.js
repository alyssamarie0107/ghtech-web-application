// ----------------------------------------------
// developed by: alyssa rodriguez
// email: amrrodriguez@ucdavis.edu
// ----------------------------------------------

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import styles from './UserContacts.module.css';

// popup modal for adding a new contact
// TODO: when user saves the newly created contact, make a new ListGroup.Item component with user name input and display it in ListGroup
function NewContactModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id = {styles.NewContactModal}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* form to fill for adding a new contact */}
            <Form.Group>
                <Form.Control type="text" placeholder="Name"/>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button> {/* close the modal*/}
          <Button variant="primary" onClick={props.onHide}>Add</Button> {/* add contact to contacts list */}
        </Modal.Footer>
      </Modal>
    );
}

  // popup modal for sending a message to a contact
  // TODO: when user sends a new message to a contact, actually send a message and have it shown in Chat screen
function SendMessageModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id = {styles.SendMessageModal}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Send Direct Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* form to fill for adding a new contact */}
            <Form.Group>
                <Form.Control as="textarea" rows={3} placeholder="Message"/>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button> {/* close the modal*/}
          <Button variant="primary" onClick={props.onHide}>Send</Button> {/* add contact to contacts list */}
        </Modal.Footer>
      </Modal>
    );
}

const Contacts = () => {
    const [newContactModalShow, setnewContactModalShow] = React.useState(false);
    const [sendMessageModalShow, setSendMessageModalShow] = React.useState(false);

    return (
        <section className = {styles.ContactsSection}>
            <NewContactModal show={newContactModalShow} onHide={() => setnewContactModalShow(false)}/>
            <SendMessageModal show={sendMessageModalShow} onHide={() => setSendMessageModalShow(false)}/>

            <h3 id = {styles.ContactsHeader}>Your Contacts:</h3>

            <ListGroup id = {styles.ListGroup}>
                {/* when user clicks on one of the contacts, show send message popup modal */}
                {/* hard code contacts for now */}
                <ListGroup.Item onClick={() => setSendMessageModalShow(true)} action variant="secondary">George Hofstetter</ListGroup.Item>
                <ListGroup.Item onClick={() => setSendMessageModalShow(true)} action variant="secondary">Gerri Hofstetter</ListGroup.Item>
                <ListGroup.Item onClick={() => setSendMessageModalShow(true)} action variant="secondary">Rev. Diana McDaniel </ListGroup.Item>
                <ListGroup.Item onClick={() => setSendMessageModalShow(true)} action variant="secondary">Ndene Diallo</ListGroup.Item>
                <ListGroup.Item onClick={() => setSendMessageModalShow(true)} action variant="secondary">Alyssa Rodriguez</ListGroup.Item>
                <ListGroup.Item onClick={() => setSendMessageModalShow(true)} action variant="secondary">Lauren de Leon</ListGroup.Item>
                <ListGroup.Item onClick={() => setSendMessageModalShow(true)} action variant="secondary">Keana Jennelle</ListGroup.Item>
                <ListGroup.Item onClick={() => setSendMessageModalShow(true)} action variant="secondary">Kristiana Sunga</ListGroup.Item>
                <ListGroup.Item onClick={() => setSendMessageModalShow(true)} action variant="secondary">Catalina Navarro</ListGroup.Item>
                <ListGroup.Item onClick={() => setSendMessageModalShow(true)} action variant="secondary">Briley Wong</ListGroup.Item>
                <ListGroup.Item onClick={() => setSendMessageModalShow(true)} action variant="secondary">Eren Jaeger</ListGroup.Item>
                <ListGroup.Item onClick={() => setSendMessageModalShow(true)} action variant="secondary">Mikasa Ackermann</ListGroup.Item>
                <ListGroup.Item onClick={() => setSendMessageModalShow(true)} action variant="secondary">Armin Arlelt</ListGroup.Item>
            </ListGroup>

            <Button id = {styles.AddContactBtn} variant="primary" onClick={() => setnewContactModalShow(true)}>Add Contact</Button>
        </section>
    );
}

export default Contacts;