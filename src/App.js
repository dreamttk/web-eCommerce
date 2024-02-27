import "./App.css";
import React, { useState, useEffect } from "react";
import logo from "./pic/Frame 168.png";
import account from "./pic/account.png";
import search from "./pic/search.png";
import heart from "./pic/heart.png";
import Vector from "./pic/Vector.png";
import Home from "./components/home";
import Blog from "./components/blog";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import Contact from "./components/contact";
import Product from "./components/product";
import Shop from "./components/shop";
import Singleproduct from "./components/singleproduct";
import Asgaardsofa5 from "./pic/Asgaardsofa5.png";
import Asgaardsofa6 from "./pic/Asgaardsofa6.png";
import Vector8 from "./pic/Vector8.png";
import Vector9 from "./pic/Vector9.png";

function App() {
  const [page, setPage] = useState(1);

  const [shopcart, setShopcart] = useState(false);

  const OpenExplore = (value) => {
    setPage(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <div className="header-top">
        <div className="header-set">
          <div className="header-logo">
            <img src={logo} />{" "}
          </div>
          <div className="header-menu">
            <p className="top-bar" onClick={() => setPage(1)}>
              Home
            </p>
            <p className="top-bar" onClick={() => setPage(2)}>
              Shop
            </p>
            <p className="top-bar" onClick={() => setPage(3)}>
              About
            </p>
            <p className="top-bar" onClick={() => setPage(4)}>
              Contact
            </p>{" "}
          </div>
          <div className="header-icon">
            <img src={account} />
            <img src={search} />
            <img src={heart} />
            <img className="set-Vector" onClick={() => setShopcart(true)} src={Vector} />
          </div>
        </div>
      </div>
      {{
        1: <Home ExplorePage={OpenExplore} />,
        2: <Shop ExplorePage={OpenExplore} />,
        3: <Blog />,
        4: <Contact />,
        6: <Singleproduct ExplorePage={OpenExplore} />,
        7: <Cart ExplorePage={OpenExplore}  />,
        8: <Product ExplorePage={OpenExplore} />,
        9: <Checkout />,
      }[page] || null}
      <div className="footer-top"></div>

      <div className="footter-box">
        <div className="footer-box1">
          <div className="footer-row1">
            <p className="f-footer-row1">Funiro.</p>
            <p className="f-footer-row1-col2">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>
          <div className="footer-row2">
            <p className="f-footer-row">Links</p>
            <p onClick={() => setPage(1)} className="f-footer-row2-col">
              Home
            </p>
            <p onClick={() => setPage(2)} className="f-footer-row2-col">
              Shop
            </p>
            <p onClick={() => setPage(3)} className="f-footer-row2-col">
              About
            </p>
            <p onClick={() => setPage(4)} className="f-footer-row2-col">
              Contact
            </p>
          </div>
          <div className="footer-row3">
            <p className="f-footer-row">Help</p>
            <p className="f-footer-row2-col">Payment Options</p>
            <p className="f-footer-row2-col">Returns</p>
            <p className="f-footer-row2-col">Privacy Policies</p>
          </div>
          <div className="footer-row4">
            <p className="f-footer-row">Newsletter</p>
            <div className="crop-box">
              <input className="box" placeholder="Enter Your Email Address" />
              <input className="box2" placeholder="  SUBSCRIBE" />
            </div>
          </div>
        </div>
      </div>
      <div className="crop-end-ft">
        <div className="end-footer"></div>
      </div>
      <p className="f-2023">2023 furino. All right revered</p>
      {/* Shop cart */}
      {shopcart && (
        <div className="set-shop-cart">
          <div className="shop-cart">
            <div className="shop-cart-in">
              <div className="set-vec9">
                <p className="font-shop-top">Shopping Cart</p>
                <img 
                  onClick={() => setShopcart(false)}
                  className="vec9"
                  src={Vector9}
                />
              </div>
              <div className="shop-cart-line"></div>

              <div className="shop-cart-in1">
                <div className="shopcart-bg">
                  <img src={Asgaardsofa5} />
                </div>
                <div className="set-f-shopcart">
                  <div className="font1-shopcart">Asgaard sofa</div>
                  <div className="font2-shopcart">
                    1 X <p className="thb-sc">THB. 25,000.00</p>
                  </div>
                </div>
                <div className="icon-x">
                  <img src={Vector8} />
                  <div></div>
                </div>
              </div>

              <div className="shop-cart-in2">
                <img className="asgsofa6" src={Asgaardsofa6} />
                <div className="set-f-shopcart">
                  <div className="font1-shopcart">Casaliving Wood</div>
                  <div className="font2-shopcart">
                    1 X <p className="thb-sc">THB. 35,000.00</p>
                  </div>
                </div>
                <div className="icon-x">
                  <img src={Vector8} />
                </div>
              </div>
            </div>
            <div className="box-cut-big"></div>
            <div className="but-box3">
              Subtotal<p className="thb-sc1">THB. 60,000.00</p>
            </div>
            <div className="shop-cart-line2"></div>
            <div className="but-box3">
              <button onClick={() => setPage(7)} className="c1-but-bot">
                Cart
              </button>
              <button onClick={() => setPage(9)}  className="c23-but-bot">Checkout</button>
              <button onClick={() => setPage(8)}  className="c23-but-bot">Comparison</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
