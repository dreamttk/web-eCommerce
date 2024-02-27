import React from "react";
import "./cart.css";
import Vector1 from "../pic/Vector1.png";
import Rectangle1 from "../pic/Rectangle1.png";
import Logo from "../pic/logo.png";
import cd1 from "../pic/cd1.png";
import cd2 from "../pic/cd2.png";
import cd3 from "../pic/cd3.png";
import cd4 from "../pic/cd4.png";
import Vector10 from "../pic/Vector10.png";
import Asgaardsofa5 from "../pic/Asgaardsofa5.png";

function cart({ ExplorePage }) {
  return (
    <>

      <div className="top-blog">
        <img className="setpic1" src={Rectangle1} />
        <div className="box-in-topblog">
          <img src={Logo} />
          <p className="top-font01">Cart</p>
          <p className="setvector1">
            Home <img src={Vector1} /> Cart
          </p>
        </div>
      </div>

      <div className="crop-totals">
        <div className="totals-box">
          <div className="totals-box-in">
            <div className="totals-left">
              <div className="totals-left-top">
                <div className="totals-left-f" >
                <p>Product</p>
                <p>Price</p>
                </div>
                <div className="totals-left-f1" >
                <p >Quantity</p>
                <p>Subtotal</p>
                </div>
              </div>
              <div className="set-cart-sofa">
                <div className="bg-sofa-cart">
                  <img src={Asgaardsofa5} />
                </div>
                <p className="subtotals-cl1">Asgaard sofa</p>
                <p className="subtotals-cl1">THB. 25,000.00</p>
                <button className="Quantity1-but">1</button>
                <p>THB. 25,000.00</p>
                <img src={Vector10} />
              </div>
            </div>
            <div className="totals-right">
              <p className="cart-totals-f">Cart Totals</p>
              <div className="subtotal">
                <p>Subtotal</p>
                <p className="subtotals-cl1">THB. 25,000.00</p>
              </div>
              <div className="subtotal2">
                <p>Total</p>
                <p className="subtotals-cl2">THB. 25,000.00</p>
              </div>
              <button onClick={() => ExplorePage(9)} className="checkout-but">Check Out</button>
            </div>
          </div>
        </div>
      </div>

      {/* credit box */}
      <div className="credit-box">
        <div className="in-credit">
          <div className="all-cd-icon">
            <img src={cd1} />
          </div>
          <div>
            <p className="font-col1">High Quality</p>
            <p className="font-col2">crafted from top materials</p>
          </div>

          <div className="all-cd-icon">
            <img src={cd2} />
          </div>
          <div>
            <p className="font-col1">Warranty Protection</p>
            <p className="font-col2">Over 2 years</p>
          </div>
          <div className="all-cd-icon">
            <img src={cd3} />
          </div>
          <div>
            <p className="font-col1">Free Shipping</p>
            <p className="font-col2">Order over 150 $</p>
          </div>
          <div className="all-cd-icon">
            <img src={cd4} />
          </div>
          <div>
            <p className="font-col1">24 / 7 Support</p>
            <p className="font-col2">Dedicated support</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default cart;
