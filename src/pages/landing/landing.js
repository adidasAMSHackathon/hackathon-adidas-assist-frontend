import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
import { Button } from 'react-bootstrap';


const images = [1,2,3,4,5,6,7,8,9,10,12,13,14,15];

class Landing extends Component {
  render() {
    return (
      <div className="landing-wrapper">
        <div className="frame__product">
          <img className="product__img" src={require('./shoe.jpg')} alt="product"></img>
          <div className="info__box">
            <h1 className="product__title">Red Sneakers</h1>
            <h3 className="product__price">99,50 €</h3>
            <Link to="/details"><Button bsStyle="danger" block>Details</Button></Link>
          </div>
        </div>
        <div className="frame__product">
          <img className="product__img" src={require('./black.jpg')} alt="product"></img>
          <div className="info__box">
            <h1 className="product__title">Fun Sneakers</h1>
            <h3 className="product__price">195,50 €</h3>
            <Button bsStyle="danger" block>Details</Button>
          </div>
        </div>
        <div className="frame__product">
          <img className="product__img" src={require('./green.jpg')} alt="product"></img>
          <div className="info__box">
            <h1 className="product__title">Cute Sneakers</h1>
            <h3 className="product__price">80,50 €</h3>
            <Button bsStyle="danger" block>Details</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
