import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';

// import 'font-awesome/css/font-awesome.css';

//import Header from './header/Header';
import Landing from '../pages/landing/landing';
import LoginPage from '../components/auth/login';
import Header from '../components/header/Header';
import DetailsPage from '../pages/details/details';

import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import logo from '../assets/monster.png';
import './App.css';

import {ApiAiClient} from "api-ai-javascript";

const client = new ApiAiClient({accessToken: '622c99fbec55421ba644273a7c7b82cd'});

let globalState = {
  worldLocation: '',
  currentLocation: 'home',
  previousLocations: [],
  toRemind: []
}


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }

    this.handleNewUserMessage = this.handleNewUserMessage.bind(this);
    this.handleCurrentLocation = this.handleCurrentLocation.bind(this);
  }

  // Preferred location to do any initialization actions
  componentDidMount() {

    console.log('fetching location');
    axios.get('https://ipinfo.io')
    .then(res => {
      console.log('res: ', res);
      globalState.worldLocation = res.data.city;

      console.log('globalState: ', globalState);
      if (globalState.worldLocation) {
        addResponseMessage(`Welcome to Adidas, I am Mr. Bot from ${globalState.worldLocation}. How may I help you?`);
      }
      else {
        addResponseMessage(`Welcome to Adidas, I am Mr. Bot. How may I help you?`);
      }
    });
  }

  handleCurrentLocation(location) {
    globalState.currentLocation = location;
    globalState.previousLocations.push(location);
    console.log('globalState: ', globalState);
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    client
    .textRequest(newMessage)
        .then((response) => {
          console.log('Response: ', response);
          let replyData = response.result.fulfillment.speech.split('|');
          console.log('replyData: ', replyData);
          let reply = replyData[0];

          if (reply == 'fetchJoke') { return this.fetchJoke(); }
          if ( reply == '') { reply = 'Can you repeat the question please?' }

          setTimeout(() => {
            addResponseMessage(reply);

            if (replyData.length > 1) {
              let followupReply = `Sending you to the best ${replyData[2]} ${replyData[1]} for ${replyData[2]}!`;
              
              setTimeout(() => {
                addResponseMessage(followupReply);
              }, 700);
            }

          }, 1000);

          

        })
        .catch((error) => {/* do something here too */})
  }

  fetchJoke() {
    console.log('fetching a joke');
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(res => {
      setTimeout(() => {
        addResponseMessage(res.data.value);
      }, 1000);
    });
  }

  render() {
    return (
      <div className="main-app">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={LoginPage}/>
            <Route path="/details" render={props => <DetailsPage handleCurrentLocation = {this.handleCurrentLocation} />} />
          </div>
        </BrowserRouter>
        <Widget 
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Adidas Assist"
          subtitle="Mr. Bot"
        />
      </div>
    );
  }
}

export default App;
