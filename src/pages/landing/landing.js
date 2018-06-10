import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './landing.css';

const images = [1,2,3,4,5,6,7,8,9,10,12,13,14,15];

class Landing extends Component {
  render() {
    return (
      <div className="landing-wrapper">
        {images.map((img, i) => 
          <img className="landing__image" key={i} alt="product" src="http://picsum.photos/g/300/500/?random"></img>
        )}
      </div>
    );
  }
}

export default Landing;


