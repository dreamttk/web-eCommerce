import React from 'react'
import "./checkout.css";
import Logo from "../pic/logo.png";
import Vector1 from "../pic/Vector1.png";
import Rectangle1 from "../pic/Rectangle1.png";
import cd1 from "../pic/cd1.png";
import cd2 from "../pic/cd2.png";
import cd3 from "../pic/cd3.png";
import cd4 from "../pic/cd4.png";
import Vector15 from "../pic/Vector15.png"


function checkout() {
  return (
   <>
    <div className="top-blog">
        <img className="setpic1" src={Rectangle1} />
        <div className="box-in-topblog">
          <img src={Logo} />
          <p className="top-font01">checkout</p>
          <p className="setvector1">
            Home <img src={Vector1} /> checkout
          </p>
        </div>
      </div>

      <div className='crop-billing-box' >
      <div className='billing-box'>
        <div className='billing-box-in' >
          <div className='billing-box-in-left' >
            <p className='font-bd-left-top'>Billing details</p>
            <div className='name-bd' >
              <div >
              <p className='font-bd-left' >First Name</p>
              <input className='box5'/>
              </div>
              <div>
              <p className='font-bd-left'>Last Name</p>
              <input className='box5'/>
              </div>
            </div>
            <p className='font-bd' >Company Name (Optional)</p>
            <input className='box6'/>
            <p className='font-bd'>Country / Region</p>
            <input className='box6' placeholder="  Bangkok"/>
            <p className='font-bd'>Street address</p>
            <input className='box6'/>
            <p className='font-bd'>Town / City</p>
            <input className='box6'/>
            <p className='font-bd'>Province</p>
            <input className='box6' placeholder="  Western Province"/>
            <p className='font-bd'>ZIP code</p>
            <input className='box6'/>
            <p className='font-bd'>Phone</p>
            <input className='box6'/>
            <p className='font-bd'>Email address</p>
            <input className='box6'/>
            <p className='font-bd'></p>
            <input className='box6' placeholder="  Additional information"/>
      
          </div>


          {/* billing right */}
          <div className='billing-box-in-right' >
            <div className='billing-top-right' >
              <div className='billing-grid' >
                <div className='grid-b billing1'>Product</div>
                <div className='grid-b billing1 text-end'>Subtotal</div>
                
                <div className='grid-b billing2 row-sub1'>Asgaard sofa <p className='sub1' >x 1</p></div>
                <div className='grid-b billing3 text-end'>THB. 25,000.00</div>
                <div className='grid-b billing3 '>Subtotal</div>
                <div className='grid-b billing3 text-end'>THB. 25,000.00</div>
                <div className='grid-b billing3'>Total</div>
                <div className='grid-b billing4 text-end'>THB. 25,000.00</div>
              </div>
            </div>
            <div className='billing-bot-right' >
            <div className='cut-bill' ></div>
              <div className='crop-color-radio' >
              <input className='color-radio' type="radio"/>
              <b className='dir1' >Direct Bank Transfer</b>
              </div>
              <p className='dir2'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
              <div className='crop-color-radio' >
              <input className='color-radio1' type="radio"/>
              <p className='dir2'>Direct Bank Transfer</p>
              </div>
              <div className='crop-color-radio' >
              <input className='color-radio1' type="radio"/>
              <p className='dir2'>Cash On Delivery</p>
              </div>
              <p>Your personal data will be used to support your experience throughout this website, 
                to manage access to your account, and for other purposes described in our 
              <b > privacy policy.</b></p>
             <div className='set-od' > <button className='Place-od' >Place order</button></div>
            </div>
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
  )
}

export default checkout
