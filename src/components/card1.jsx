import React from "react";
import cart from "../assets/cart.svg"
import Buttons from "./buttons";
import "./Card1.css";

const Card1 = ({ id, name, price, url, fn }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="cardimg">
          <img className="card-image" src={url} alt={name} />
        </div>

        <div className="card-content">
          <h5 className="card-title">{name}</h5>
          <p className="card-price">Price: Rs.{price}</p>
        </div>
        <div className="card-actions">
          <Buttons name={<span>Add to  <img src={cart} alt="cart" /></span>} prod_id={id} fn={fn} val="+" />
        </div>
      </div>
    </div>
  );
};

export default Card1;
