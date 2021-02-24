// ----------------------------------------------
// developed by: alyssa rodriguez
// email: amrrodriguez@ucdavis.edu
// ----------------------------------------------

import React, {Component} from 'react'
import ContactsNav from '../../components/universal/navbar/contacts-chat-nav/ContactsChatNavBar'
import UserContacts from '../../components/contacts/user-contacts/UserContacts'

class Contacts extends Component {
  render () {
    return (
      <div>
          <ContactsNav/>
          <UserContacts/>
      </div>
    );
  }
}

export default Contacts;
