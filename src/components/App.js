import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

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



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }

    this.handleNewUserMessage = this.handleNewUserMessage.bind(this);
  }

  // Preferred location to do any initialization actions
  componentDidMount() {
    addResponseMessage("Howdy!");
  }

  

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    client
    .textRequest(newMessage)
        .then((response) => {
          console.log('Response: ', response);

          setTimeout(() => {
            addResponseMessage(response.result.fulfillment.speech);
          }, 500);

        })
        .catch((error) => {/* do something here too */})
    
    
  }

  render() {
    return (
      <div className="main-app">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={LoginPage}/>
            <Route path="/details" component={DetailsPage}/>
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
