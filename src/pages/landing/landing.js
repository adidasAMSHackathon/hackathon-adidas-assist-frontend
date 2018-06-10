import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

import './landing.css';

import {ApiAiClient} from "api-ai-javascript";

const client = new ApiAiClient({accessToken: '622c99fbec55421ba644273a7c7b82cd'});

const images = [1,2,3,4,5,6,7,8,9,10,12,13,14,15];

client
.textRequest('Hi')
    .then((response) => {
      console.log('response: ', response);
    })
    .catch((error) => {/* do something here too */})

class Landing extends Component {
  render() {
    return (
      <div className="landing-wrapper">
        {images.map((img, i) => 
          <img className="landing__image" key={i} src="http://picsum.photos/g/300/500/?random"></img>
        )}
      </div>
    );
  }
}

export default Landing;


