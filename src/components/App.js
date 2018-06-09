import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// import 'font-awesome/css/font-awesome.css';

//import Header from './header/Header';
import Landing from '../pages/Landing';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }

    this.handler = this.handler.bind(this);
  }


  handler() {
    this.setState({
        user: false
    });
}

  // Preferred location to do any initialization actions
  componentDidMount() {
  }

  render() {
    return (
      <div className="main-app">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
