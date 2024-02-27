import React from "react";
import "./product.css";
import Logo from "../pic/logo.png";
import Vector1 from "../pic/Vector1.png";
import Rectangle1 from "../pic/Rectangle1.png";
import cd1 from "../pic/cd1.png";
import cd2 from "../pic/cd2.png";
import cd3 from "../pic/cd3.png";
import cd4 from "../pic/cd4.png";
import star from "../pic/star.png";
import starhalf from "../pic/starhalf.png";
import Line6 from "../pic/Line6.png";
import Asgaardsofa4 from "../pic/Asgaardsofa4.png";
import Outdoorsofaset1 from "../pic/Outdoorsofaset1.png";
import Vector11 from "../pic/Vector11.png"

function product() {
  return (
    <>
      {/* shop bar */}
      <div className="top-blog">
        <img className="setpic1" src={Rectangle1} />
        <div className="box-in-topblogpd">
          <img src={Logo} />
          <p className="top-font01">Product Comparison</p>
          <p className="setvector1">
            Home <img src={Vector1} /> Comparison
          </p>
        </div>
      </div>
      {/* ------------ */}

      <div className="crop-add-cart">
        <div className="add-cart">
          <div className="add-cart-box">
            <p className="section3">Go to Product page for more Products</p>
            <button className="Read-but-blog3">View More</button>
          </div>

          <div className="add-cart-box">
            <div className="review-pd-sofa">
              <img className="set-Asgaardsofa4" src={Asgaardsofa4} />
            </div>
            <div className="crop-pd-sofa">
            <p className="right-f-pd-sofa1">Asgaard Sofa</p>
            <p className="right-f-pd-sofa2">THB 45,000.00</p>
            <div className="asgaard-pd-sofa">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={starhalf} />
              <img src={Line6} />
              <p className="right-f-pd-sofa3">5 Customer Review</p>
            </div>
            </div>
          </div>

          <div className="add-cart-box">
            <div className="review-pd-sofa">
              <img className="set-Outdoorsofa" src={Outdoorsofaset1} />
            </div>
            <div className="crop-pd-sofa">
              <p className="right-f-pd-sofa1">Asgaard Sofa</p>
              <p className="right-f-pd-sofa2">THB 45,000.00</p>

              <div className="asgaard-pd-sofa">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={starhalf} />
                <img src={Line6} />
                <p className="right-f-pd-sofa3">5 Customer Review</p>
              </div>
            </div>
          </div>
          <div className="add-cart-box1">
            <p className="section4">Add A Product</p>
            <button className="but-section4" >Choose a Product</button>
            < img className="set-Vector11"  src={Vector11}/>
          </div>
        </div>
      </div>

      <div className="cropgrid-4box">
        <div className="grid-4box">
          {/* grid grid1 */}
          <div className="grid grid1">
            <p className="section">General </p>
            <p className="section1">Sales Package</p>
            <p className="section1">Model Number</p>
            <p className="section1">Secondary Material</p>
            <p className="section1">Configuration</p>
            <p className="section1">Upholstery Material</p>
            <p className="section1">Upholstery Color</p>
            <p className="section">Product </p>
            <p className="section1">Filling Material</p>
            <p className="section1">Finish Type</p>
            <p className="section1">Adjustable Headrest</p>
            <p className="section1">Maximum Load Capacity</p>
            <p className="section1">Origin of Manufacture</p>
            <p className="section">Dimensions </p>
            <p className="section1">Width</p>
            <p className="section1">Height</p>
            <p className="section1">Depth</p>
            <p className="section1">Weight</p>
            <p className="section1">Seat Height</p>
            <p className="section1">Leg Height</p>
          </div>
          {/* grid grid2 */}
          <div className="grid grid2">
            <p className="section"> </p>
            <p className="section1">1 sectional sofa</p>
            <p className="section1">TFCBLIGRBL6SRHS</p>
            <p className="section1">Solid Wood</p>
            <p className="section1">L-shaped</p>
            <p className="section1">Fabric + Cotton</p>
            <p className="section1">Bright Grey & Lion</p>
            <p className="section"></p>
            <p className="section1">Foam</p>
            <p className="section1">Bright Grey & Lion</p>
            <p className="section1">No</p>
            <p className="section1">280 KG</p>
            <p className="section1">India</p>
            <p className="section"></p>
            <p className="section1">265.32 cm</p>
            <p className="section1">76 cm</p>
            <p className="section1">167.76 cm</p>
            <p className="section1">45 KG</p>
            <p className="section1">41.52 cm</p>
            <p className="section1">5.46 cm</p>
          </div>
          {/* grid grid3 */}
          <div className="grid grid3">
            <p className="section"></p>
            <p className="section1">1 Three Seater, 2 Single Seater</p>
            <p className="section1">DTUBLIGRBL568</p>
            <p className="section1">Solid Wood</p>
            <p className="section1">L-shaped</p>
            <p className="section1">Fabric + Cotton</p>
            <p className="section1">Bright Grey & Lion</p>
            <p className="section"></p>
            <p className="section1">Matte</p>
            <p className="section1">Bright Grey & Lion</p>
            <p className="section1">yes</p>
            <p className="section1">300 KG</p>
            <p className="section1">India</p>
            <p className="section"></p>
            <p className="section1">265.32 cm</p>
            <p className="section1">76 cm</p>
            <p className="section1">167.76 cm</p>
            <p className="section1">65 KG</p>
            <p className="section1">41.52 cm</p>
            <p className="section1">5.46 cm</p>
          </div>

          <div className="grid grid4"></div>
        </div>
      </div>
      <div className="cropgrid-4box">
        <div className="botgrid">
          <div className="itemsg itemsg1">
            <p className="section">Warranty</p>
          </div>
          <div className="itemsg itemsg1"></div>
          <div className="itemsg itemsg1"></div>
          <div className="itemsg itemsg11"></div>
          <div className="itemsg itemsg2">
            {" "}
            <p className="section2">Warranty Summary</p>
          </div>
          <div className="itemsg itemsg3">
            {" "}
            <p className="section2">1 Year Manufacturing Warranty</p>
          </div>
          <div className="itemsg itemsg4">
            <p className="section2">1.2 Year Manufacturing Warranty</p>
          </div>
          <div className="itemsg itemsg5"></div>

          <div className="itemsg itemsg6">
            <p className="section2">Warranty Service Type</p>
          </div>
          <div className="itemsg itemsg7">
            <p className="section2">
              For Warranty Claims or Any Product Related Issues Please Email at
              operations@trevifurniture.com
            </p>
          </div>
          <div className="itemsg itemsg8">
            <p className="section2">
              For Warranty Claims or Any Product Related Issues Please Email at
              support@xyz.com
            </p>
          </div>
          <div className="itemsg itemsg9"></div>

          <div className="itemsg itemsg6">
            <p className="section2">Covered in Warranty</p>
          </div>
          <div className="itemsg itemsg7">
            <p className="section2">Warranty Against Manufacturing Defect</p>
          </div>
          <div className="itemsg itemsg8">
            <p className="section2">
              Warranty of the product is limited to manufacturing defects only.
            </p>
          </div>
          <div className="itemsg itemsg9"></div>

          <div className="itemsg itemsg6">
            <p className="section2">Not Covered in Warranty</p>
          </div>
          <div className="itemsg itemsg7">
            <p className="section2">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </p>
          </div>
          <div className="itemsg itemsg8">
            <p className="section2">
              The Warranty Does Not Cover Damages Due To Usage Of The Product
              Beyond Its Intended Use And Wear & Tear In The Natural Course Of
              Product Usage.
            </p>
          </div>
          <div className="itemsg itemsg9"></div>

          <div className="itemsg itemsg22">
            <p className="section2">Domestic Warranty</p>
          </div>
          <div className="itemsg itemsg33">
            <p className="section2">1 Year</p>
            <button className="add-to-cart">Add To Cart</button>
          </div>
          <div className="itemsg itemsg44">
            <p className="section2">3 Months</p>
            <button className="add-to-cart">Add To Cart</button>
          </div>
          <div className="itemsg itemsg55"></div>
        </div>
      </div>

      {/* credit-box */}
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

export default product;
