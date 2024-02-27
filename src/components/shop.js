import React from "react";
import "./shop.css";
import syltherine from "../pic/syltherine.png";
import image2 from "../pic/image2.png";
import lolito1 from "../pic/lolito1.png";
import Res1 from "../pic/Res1.png";
import Logo from "../pic/logo.png";
import Label from "../pic/Label.png";
import Vector1 from "../pic/Vector1.png";
import Rectangle1 from "../pic/Rectangle1.png";
import Vector2 from "../pic/Vector2.png";
import Vector3 from "../pic/Vector3.png";
import Vector4 from "../pic/Vector4.png";
import Line5 from "../pic/Line5.png";
import cd1 from "../pic/cd1.png";
import cd2 from "../pic/cd2.png";
import cd3 from "../pic/cd3.png";
import cd4 from "../pic/cd4.png";

function shop({ ExplorePage }) {
  const Product_data = [
    {
      pic: syltherine,
      name: "syltherine",
      desc: "Stylish cafe chair",
      price: "THB 25,000",
      fullsale: "THB 35,500",
      percent: "-30%",
    },

    {
      pic: image2,
      name: "Leviosa",
      desc: "Stylish cafe chair",
      price: "THB 15,000",
    },

    {
      pic: lolito1,
      name: "Lolito",
      desc: "Stylish cafe chair",
      price: "THB 22,500",
      fullsale: "THB 45,000",
      percent: "-50%",
    },
    {
      pic: Res1,
      name: "Respira",
      desc: "Stylish cafe chair",
      price: "THB 30,000",
      fullsale: "THB 60,000",
      percent: "-50%",
    },
    {
      pic: syltherine,
      name: "syltherine",
      desc: "Stylish cafe chair",
      price: "THB 25,000",
      fullsale: "THB 35,500",
      percent: "-30%",
    },

    {
      pic: image2,
      name: "Leviosa",
      desc: "Stylish cafe chair",
      price: "THB 15,000",
    },

    {
      pic: lolito1,
      name: "Lolito",
      desc: "Stylish cafe chair",
      price: "THB 22,500",
      fullsale: "THB 45,000",
      percent: "-50%",
    },
    {
      pic: Res1,
      name: "Respira",
      desc: "Stylish cafe chair",
      price: "THB 30,000",
      fullsale: "THB 60,000",
      percent: "-50%",
    },
    {
      pic: syltherine,
      name: "syltherine",
      desc: "Stylish cafe chair",
      price: "THB 25,000",
      fullsale: "THB 35,500",
      percent: "-30%",
    },

    {
      pic: image2,
      name: "Leviosa",
      desc: "Stylish cafe chair",
      price: "THB 15,000",
    },

    {
      pic: lolito1,
      name: "Lolito",
      desc: "Stylish cafe chair",
      price: "THB 22,500",
      fullsale: "THB 45,000",
      percent: "-50%",
    },
    {
      pic: Res1,
      name: "Respira",
      desc: "Stylish cafe chair",
      price: "THB 30,000",
      fullsale: "THB 60,000",
      percent: "-50%",
    },
    {
      pic: syltherine,
      name: "syltherine",
      desc: "Stylish cafe chair",
      price: "THB 25,000",
      fullsale: "THB 35,500",
      percent: "-30%",
    },

    {
      pic: image2,
      name: "Leviosa",
      desc: "Stylish cafe chair",
      price: "THB 15,000",
    },

    {
      pic: lolito1,
      name: "Lolito",
      desc: "Stylish cafe chair",
      price: "THB 22,500",
      fullsale: "THB 45,000",
      percent: "-50%",
    },
    {
      pic: Res1,
      name: "Respira",
      desc: "Stylish cafe chair",
      price: "THB 30,000",
      fullsale: "THB 60,000",
      percent: "-50%",
    },
  ];

  return (
    <>
    {/* shop bar */}
      <div className="top-blog">
        <img className="setpic1" src={Rectangle1} />
        <div className="box-in-topblog">
          <img src={Logo} />
          <p className="top-font01">Shop</p>
          <p className="setvector1">
            Home <img src={Vector1} /> Shop
          </p>
        </div>
      </div>
{/* ------------ */}
      <div className="crop-cutzone">
        <div className="cutzone">
          <div className="setzone-all">
            <div className="setzone-left">
              <img src={Vector2} />
              <p>Filter</p>
              <img src={Vector3} />
              <img src={Vector4} />
              <img src={Line5} />
              <p>Showing 1–16 of 32 results</p>
            </div>
            <div className="setzone-right">
              <p>Show</p>
              <input className="box3" placeholder="16" />
              <p>Short by</p>
              <input className="box4" placeholder="Default" />
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="mockup">
          {Product_data.map((item, index) => (
            <div  onClick={() => ExplorePage(6)} className="mockup2" key={index}>
              <div className="mockup-pic">
                <img src={item.pic} />
                {/* <img className="sale-icon" src={Label}/> */}
              </div>
              <p className="pd-font1">{item.name}</p>
              <p className="pd-font2">{item.desc}</p>
              <div className="set-font-shop">
                <p className="pd-font1">{item.price}</p>
                <p className="pd-font3"><del>{item.fullsale}</del></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="crop-but-page">
        <div className="but-page">
          <button className="but-1-s">1</button>
          <button className="but-2-s">2</button>
          <button className="but-3-s">3</button>
          <button className="but-next-s">Next</button>
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

export default shop;
