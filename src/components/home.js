import React, { useState } from "react";
import background1 from "../pic/background1.webp";
import "./home.css";
import dining from "../pic/dining.png";
import living from "../pic/living.png";
import bedroom from "../pic/bedroom.png";
import syltherine from "../pic/syltherine.png";
import leviosa from "../pic/leviosa.png";
import lolito from "../pic/lolito.png";
import Respira from "../pic/Respira.png";
import Grifo from "../pic/Grifo.png";
import Muggo from "../pic/Muggo.png";
import Pingky from "../pic/Pingky.png";
import Potty from "../pic/Potty.png";
import Label from "../pic/Label.png";
import Rectangle from "../pic/Rectangle .png";
import Rectangle2 from "../pic/Rectangle2.png";
import Rectangle3 from "../pic/Rectangle3.png";
import icon1page4 from "../pic/icon1page4.png";
import Active from "../pic/Active.png";
import Active1 from "../pic/Active1.png";
import Active2 from "../pic/Active2.png";
import Active3 from "../pic/Active3.png";
import mid from "../pic/mid.jpg";
import Rectangle36 from "../pic/Rectangle36.png";
import Rectangle38 from "../pic/Rectangle38.png";
import Rectangle37 from "../pic/Rectangle37.png";
import Rectangle20 from "../pic/Rectangle20.png";
import Rectangle43 from "../pic/Rectangle43.png";
import Rectangle45 from "../pic/Rectangle45.png";
import Rectangle41 from "../pic/Rectangle41.png";
import Rectangle44 from "../pic/Rectangle44.png";
import image2 from "../pic/image2.png";
import lolito1 from "../pic/lolito1.png";
import Res1 from "../pic/Res1.png";
import Image5 from "../pic/Image5.png"
import Image6 from "../pic/image6.png"
import Image7 from "../pic/image7.png"
import Image8 from "../pic/image8.png"
 
function home({ ExplorePage }) {
  const ProductPage_data = [

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
      pic: Image5,
      name: "syltherine",
      desc: "Stylish cafe chair",
      price: "THB 25,000",
      fullsale: "THB 35,500",
      percent: "-30%",
    },

    {
      pic: Image6,
      name: "Leviosa",
      desc: "Stylish cafe chair",
      price: "THB 15,000",
    },

    {
      pic: Image7,
      name: "Lolito",
      desc: "Stylish cafe chair",
      price: "THB 22,500",
      fullsale: "THB 45,000",
      percent: "-50%",
    },
    {
      pic: Image8,
      name: "Respira",
      desc: "Stylish cafe chair",
      price: "THB 30,000",
      fullsale: "THB 60,000",
      percent: "-50%",
    },
  ];

  return (
    <>
      <div className="conteiner-bg-1" >
        <img className="bg-1" src={background1} />
        <div className="arrival">
          <p className="top-arl-f"> New Arrival</p>
          <p className="mid-arl-f">
            Discover Our <br />
            New Collection
          </p>
          <p className="lorem-bot-f">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus
            <br />
            luctus nec ullamcorper mattis.
          </p>
          <button className="top-but" onClick={() => ExplorePage(2)}>BUY NOW</button>
        </div>
      </div>
      <div className="page2-box">
        <p className="page2-font">Browse The Range</p>
        <p className="page02-font">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="page2-box1">
        <div className="set-page2-box1">
          <img className="hover-items" src={dining} />
          <p className="bot-font">Dining</p>
        </div>
        <div className="set-page2-box1">
          <img className="hover-items" src={living} />
          <p className="bot-font">Living</p>
        </div>
        <div className="set-page2-box1">
          <img className="hover-items" src={bedroom} />
          <p className="bot-font">Bedroom</p>
        </div>
      </div>
      <div className="page3-box1">
        <p className="page3-font">Our Products</p>
      </div>

      <div className="product">
        <div className="mockup">
          {ProductPage_data.map((item, index) => (
            <div  onClick={() => ExplorePage(6)}  className="mockup2" key={index}>
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
      <div className="crop-mid-but">
        <button className="mid-but" onClick={() => ExplorePage(2)} >Show More</button>
      </div>

      <div className="crop-page4-box">
        <div className="page4-box">
          <div className="set-page4-box">
            <div className="page4-box1">
              <p className="page4-box1-f">
                50+ Beautiful rooms <br />
                inspiration
              </p>
              <p className="page4-box1-f2">
                Our designer already made a lot of beautiful <br />
                prototipe of rooms that inspire you
              </p>
              <div className="crop-mid-but">
                <button className="mid-but1">Explore More</button>
              </div>
            </div>
            <div className="page4-box2">
              <div className="fix-p4" >
                <img className="page4-pic1" src={Rectangle} />
                <div className="box-inpic1">
                  <p className="font-inpic1">01-Bed Room</p>
                  <p className="font-impic2">Inner Peace</p>
                </div>
              </div>
              <div className="fix-p2-3" >
              <img className="page4-pic2" src={Rectangle2} />
              <img className="page4-pic3" src={Rectangle3} />
              </div>
              <div className="fix-p4" >
                <img className="icon1-p4" src={icon1page4} />
                <img className="icon2-p4" src={Active} />
                <img className="icon3-p4" src={Active1} />
                <img className="icon4-p4" src={Active2} />
                <img className="icon5-p4" src={Active3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="crop-page5-box">
        <div className="page5-box">
          <div className="page5-box-in">
            <div className="page5-top">
              <img src={Rectangle36} />
              <img className="pic38" src={Rectangle38} />
            </div>
            <div className="page5-bot">
              <img src={Rectangle37} />
              <div className="setpic20">
                <img className="pic20" src={Rectangle20} />
              </div>
            </div>
          </div>

          <div className="page5-box-in1">
            
              <div className="box-inpic2">
                <p className="page5-top-f1">Share your setup with</p>
                <p className="page5-top-f2">#FuniroFurniture</p>
              </div>
              <div className="crop-pic-mid">
              <img className="pic-mid" src={mid} />
            </div>
          </div>

          <div className="page5-box-in">
            <div className="page5-top2">
              <img className="setpic43" src={Rectangle43} />
              <img className="setpic45" src={Rectangle45} />
            </div>
            <div className="page5-bot2">
              <img className="setpic41" src={Rectangle41} />
              <img className="setpic42" src={Rectangle44} />
            </div>
          </div>
        </div>
      </div>

   


    </>
  );
}

export default home;
