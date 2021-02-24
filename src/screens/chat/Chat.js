// ----------------------------------------------
// developed by: alyssa rodriguez
// email: amrrodriguez@ucdavis.edu
// ----------------------------------------------

import React, {Component} from 'react'
import ChatNav from '../../components/universal/navbar/contacts-chat-nav/ContactsChatNavBar'
import ChatRoom from '../../components/chat/chatroom/ChatRoom'

class Chat extends Component {
  render () {
    return (
      <div>
          <ChatNav/>
          <ChatRoom/>
      </div>
    );
  }
}

export default Chat;
