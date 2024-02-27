import React, { useState } from "react";
import "./singleproduct.css";
import Rectangle1 from "../pic/Rectangle1.png";
import Vector3 from "../pic/Vector3.png";
import Vector4 from "../pic/Vector4.png";
import Line5 from "../pic/Line5.png";
import Logo from "../pic/logo.png";
import Vector1 from "../pic/Vector1.png";
import star from "../pic/star.png";
import starhalf from "../pic/starhalf.png";
import Line6 from "../pic/Line6.png";
import Rectangle42 from "../pic/Rectangle42.png";
import Rectangle46 from "../pic/Rectangle46.png";
import Rectangle47 from "../pic/Rectangle47.png";
import fill from "../pic/fill.png";
import linkedinl from "../pic/linkedinl.png";
import twitter from "../pic/twitter.png";
import Asgaardsofa3 from "../pic/Asgaardsofa3.png";
import Outdoorsofaset2 from "../pic/Outdoorsofaset2.png";
import Outdoorsofaset3 from "../pic/Outdoorsofaset3.png";
import Outdoorsofaset4 from "../pic/Outdoorsofaset4.png";
import Outdoorsofaset5 from "../pic/Outdoorsofaset5.png";
import Cloudofa1 from "../pic/Cloudofa1.png";
import syltherine from "../pic/syltherine.png";
import image2 from "../pic/image2.png";
import lolito1 from "../pic/lolito1.png";
import Res1 from "../pic/Res1.png";

function Singleproduct({ ExplorePage }) {
  const [number, setNumber] = useState(1);

  const addnumber = () => {
    setNumber(number + 1);
  };

  const removenumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

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
  ];
  return (
    <>
      <div className="crop-cutzone1">
        <div className="cutzone">
          <div className="setzone-all">
            <div className="setzone-left">
              <p>Home</p>
              <img src={Vector1} />
              <p>Shop</p>
              <img src={Vector1} />
              <img src={Line5} />
              <p>Asgaard sofa</p>
            </div>
          </div>
        </div>
      </div>
      <div className="crop-asgaard">
        <div className="asgaard-box">
          <div className="asgaard-box-in">
            <div className="asgaard-row1">
              <div className="show-picrow1">
                <div className="show-minisofa">
                  <img src={Outdoorsofaset2} />
                </div>
                <div className="show-minisofa">
                  <img src={Outdoorsofaset3} />
                </div>
                <div className="show-minisofa">
                  <img src={Outdoorsofaset4} />
                </div>
                <div className="show-minisofa">
                  <img className="Outdoorsofa5" src={Outdoorsofaset5} />
                </div>
              </div>

              <div className="show-picrow2">
                <img src={Asgaardsofa3} />
              </div>
            </div>

            <div className="asgaard-row2">
              <p className="right-f-col1">Asgaard Sofa</p>
              <p className="right-f-col2">THB 45,000.00</p>

              <div className="asgaard-col1">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={starhalf} />
                <img src={Line6} />
                <p className="right-f-col3">5 Customer Review</p>
              </div>

              <p className="right-f-col4">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <p className="right-f-col5">Size</p>

              <div className="asgaard-col2">
                <button className="but-as1">L</button>
                <button className="but-as2">XL</button>
                <button className="but-as2">XS</button>
              </div>

              <p className="right-f-col5">Color</p>

              <div className="asgaard-col2">
                <img src={Rectangle42} />
                <img src={Rectangle46} />
                <img src={Rectangle47} />
              </div>

              <div className="asgaard-col3">
                <div className="col3-1">
                  <p className="remove-nb" onClick={() => removenumber()}>-</p>
                  <p>{number}</p>
                  <p className="remove-nb" onClick={() => addnumber()}>+</p>
                </div>
                <div onClick={() => ExplorePage(7)} className="col3-2">
                  Add To Cart
                </div>
                <div onClick={() => ExplorePage(8)} className="col3-3">
                  <p>+ Compare</p>
                </div>
              </div>

              <div className="asgaard-cut"></div>

              <div className="crop-asg-f">
                <div className="sku">
                  <p>SKU</p>
                  <p>Category</p>
                  <p>Tags</p>
                  <p>Share</p>
                </div>
                <div className="sku1">
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div className="sku2">
                  <p>SS001</p>
                  <p>Sofas</p>
                  <p>Sofa, Chair, Home, Shop</p>
                  <div className="box-sku2">
                    <img src={fill} />
                    <img src={linkedinl} />
                    <img src={twitter} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* description zone */}
      <div>
        <div className="crop-description">
          <div className="description-box">
            <div className="dct-top">
              <div className="dct-top-left">
                <p className="f-des">Description</p>
              </div>
              <div className="dct-top-right">
                <p className="f-add">Additional Information</p>
              </div>
              <div className="dct-top-right2">Reviews [5]</div>
            </div>
            <p className="dct-font">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall,
              <br />
              unplugs the chords, and takes the show on the road.
            </p>
            <p className="dct-font">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, <br />
              the Kilburn is a compact,stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a sound
              that is both articulate <br />
              and pronounced. The analogue knobs allow you to fine tune the
              controls to your personal preferences while the guitar-influenced{" "}
              <br />
              leather strap enables easy and stylish travel.
            </p>
            <div className="dct-bot">
              <div className="bg-sofa">
                <img src={Cloudofa1} />
              </div>
              <div className="bg-sofa">
                <img src={Cloudofa1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Related Products */}

      <div className="font-Related">
        <p>Related Products</p>
      </div>
      <div className="product">
        <div className="mockup">
          {Product_data.map((item, index) => (
            <div  onClick={() => ExplorePage(2)}  className="mockup2" key={index}>
              <div className="mockup-pic">
                <img src={item.pic} />
                {/* <img className="sale-icon" src={Label}/> */}
              </div>
              <p className="pd-font1">{item.name}</p>
              <p className="pd-font2">{item.desc}</p>
              <div className="set-font-shop">
                <p className="pd-font1">{item.price}</p>
                <p className="pd-font3">
                  <del>{item.fullsale}</del>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="crop-show-but">
        <button  onClick={() => ExplorePage(2)}  className="set-show-but">Show More</button>
      </div>
    </>
  );
}

export default Singleproduct;
