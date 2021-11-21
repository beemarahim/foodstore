import React from 'react';
import { Link } from 'react-router-dom';
import ShopMen from './../../assets/chineese.jpg';
import ShopWomen from './../../assets/pizza.jpg';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`
            
          }}
        >
          <Link to="/search/chineese">
            Shop Chineese
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`
          }}
        >
          <Link to="/search/pizza">
            Shop Pizza
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
