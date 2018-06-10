import React, {Component} from 'react'
import {render} from 'react-dom'
import {Launcher} from '../../src'

import {ApiAiClient} from "api-ai-javascript";

const client = new ApiAiClient({accessToken: '622c99fbec55421ba644273a7c7b82cd'});

client
.textRequest('Hi')
    .then((response) => {
      console.log('response: ', response);
    })
    .catch((error) => {/* do something here too */})
    
let messageHistory = [];

class Chatbot extends Component {

  constructor() {
    super();
    this.state = {
      messageList: messageHistory
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  render() {
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'react-live-chat',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}

export default Chatbot;
