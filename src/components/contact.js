import React from "react";
import "./contact.css";
import Vector12 from "../pic/Vector12.png"
import Vector13 from "../pic/Vector13.png"
import Vector14 from "../pic/Vector14.png"
import cd1 from "../pic/cd1.png";
import cd2 from "../pic/cd2.png";
import cd3 from "../pic/cd3.png";
import cd4 from "../pic/cd4.png";
import Logo from "../pic/logo.png";
import Vector1 from "../pic/Vector1.png";
import Rectangle1 from "../pic/Rectangle1.png";

function contact() {
  return (
    <>
          <div className="top-blog">
        <img className="setpic1" src={Rectangle1} />
        <div className="box-in-topblog">
          <img src={Logo} />
          <p className="top-font01">Contact</p>
          <p className="setvector1">
            Home <img src={Vector1} /> Contact
          </p>
        </div>
      </div>
      <div className="crop-contact-box">
        <div className="contact-box">
          <div className="contact-boxtop1">
            <p className="f-getintouch" >Get In Touch With Us</p>
            <p className="f-getintouch1" >
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us
              <br />
              An Email. Our Staff Always Be There To Help You Out. Do Not
              Hesitate!
            </p>
          </div>
          <div className="contact-boxtop2">
            <div className="contact-boxtopleft" >
            <div className="mini-boxtopleft1" >
              <img className="set-Vector12" src={Vector12}/>
              <img className="set-Vector13"src={Vector13}/>
              <img className="set-Vector14"src={Vector14}/>
            </div>
              <div className="mini-boxtopleft" >
                <p className="font-mini-left">Address</p>
               <div className="mini-ledt-col">
                <p>236 5th SE Avenue, New York NY10000, United States</p>
               </div>
               <p className="font-mini-left">Phone</p>
               <div className="mini-ledt-col">
                <p>Mobile: +(84) 546-6789 
                  <br/>Hotline: +(84) 456-6789</p>
               </div>
               <p className="font-mini-left">Working Time</p>
               <div className="mini-ledt-col">
                <p>Monday-Friday: 9:00 - 22:00
                <br/>Saturday-Sunday: 9:00 - 21:00</p>
               </div>
              </div>
            </div>
            <div className="contact-boxtopright" >
              <p className="font-mini-right" >Your name</p>
              <input className="box3-onbox" placeholder="  Abc" />
              <p className="font-mini-right">Email address</p>
              <input className="box3-onbox" placeholder="  Abc@def.com" />
              <p className="font-mini-right">Subject</p>
              <input className="box3-onbox" placeholder="  This is an optional" />
              <p className="font-mini-right">Message</p>
              <textarea className="box1-onbox" placeholder="  This is an optional" />
              <button className="but-submid">Submit</button>
            </div>
          </div>
        </div>
      </div>
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

export default contact;
