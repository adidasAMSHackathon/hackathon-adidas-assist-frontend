import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './details.css';
import { Button } from 'react-bootstrap';


const images = [1,2,3,4,5,6,7,8,9,10,12,13,14,15];

class Details extends Component {
  constructor(props){
    super(props)

    this.state = {
      value: "Red",
    }

    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value})
    console.log('state: ', this.state);
  }

  render() {
    return (
      <div className="landing-wrapper">
        <div className="frame__product">
          {this.state.value == 'Red'
           ? <img className="product__img" src={require('./shoe.jpg')} alt="product"></img>
           : this.state.value == 'Green'
           ? <img className="product__img" src={require('./green.jpg')} alt="product"></img>
           : this.state.value == 'Black'
           ? <img className="product__img" src={require('./black.jpg')} alt="product"></img>
           : <img className="product__img" src={require('./blue.jpg')} alt="product"></img>
          }
          <div className="info__box">
            <h1 className="product__title">Red Sneakers</h1>
            <h3 className="product__price">99,50 €</h3>
            <div className="flex">
              <div className="choices">
                <h3 className="product__price">Pick a color:</h3>
                <select onChange={this.handleColorChange} value={this.state.value}>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Black">Black</option>
                  <option value="Green">Green</option>
                </select>
              </div>
              <div className="choices">
                <h3 className="product__price">Choose size:</h3>
                <select>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                </select>
              </div>
            </div>
            <Button bsStyle="success" block>Buy</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
